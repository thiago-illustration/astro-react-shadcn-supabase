import type { APIRoute } from "astro";

import { supabase } from "@lib/supabase";
import { signupSchema } from "@modules/auth";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  const validatePayload = signupSchema.safeParse({ email, password });

  if (!validatePayload.success) {
    return new Response("Email and password are required", { status: 400 });
  }

  const payload = validatePayload.data;

  const { error } = await supabase.auth.signUp({
    email: payload.email,
    password: payload.password,
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return redirect("/signin");
};
