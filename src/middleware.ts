import { defineMiddleware, sequence } from "astro:middleware";

import { supabase } from "@lib/supabase";
import { PUBLIC_ONLY_PAGES } from "@lib/constants/public-only-pages";
import { PRIVATE_PAGES } from "@lib/constants/private-pages";

const authMiddleware = defineMiddleware(
  async ({ locals, url, cookies, redirect }, next) => {
    if (PRIVATE_PAGES.includes(url.pathname)) {
      const accessToken = cookies.get("sb-access-token");
      const refreshToken = cookies.get("sb-refresh-token");

      if (!accessToken || !refreshToken) {
        return redirect("/signin");
      }

      const { data, error } = await supabase.auth.setSession({
        refresh_token: refreshToken.value,
        access_token: accessToken.value,
      });

      if (error) {
        cookies.delete("sb-access-token", {
          path: "/",
        });
        cookies.delete("sb-refresh-token", {
          path: "/",
        });
        return redirect("/signin");
      }

      locals.user = data.user!;
      locals.session = data.session!;

      cookies.set("sb-access-token", data?.session?.access_token!, {
        sameSite: "strict",
        path: "/",
        secure: true,
      });
      cookies.set("sb-refresh-token", data?.session?.refresh_token!, {
        sameSite: "strict",
        path: "/",
        secure: true,
      });
    }

    if (PUBLIC_ONLY_PAGES.includes(url.pathname)) {
      const accessToken = cookies.get("sb-access-token");
      const refreshToken = cookies.get("sb-refresh-token");

      if (accessToken && refreshToken) {
        return redirect("/dashboard");
      }
    }
    return next();
  },
);

export const onRequest = sequence(authMiddleware);
