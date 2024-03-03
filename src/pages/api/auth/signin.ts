import type { APIRoute } from "astro";
import type { Provider } from "@supabase/supabase-js";

import { supabase } from "@lib/supabase";
import { signinSchema } from "@modules/auth";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const provider = formData.get("provider")?.toString();

  const validatePayload = signinSchema.safeParse({ email, password });

  if (!validatePayload.success) {
    return new Response("Email and password are required", { status: 400 });
  }

  const payload = validatePayload.data;
  const validProviders = ["google", "github", "discord"];

  if (provider && validProviders.includes(provider)) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider as Provider,
      options: {
        redirectTo: `${import.meta.env.PUBLIC_BASE_URL}/api/auth/callback`,
      },
    });

    if (error) {
      return new Response(error.message, { status: 500 });
    }

    return redirect(data.url);
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: payload.email,
    password: payload.password,
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, {
    path: "/",
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
  });
  return redirect("/dashboard");
};
