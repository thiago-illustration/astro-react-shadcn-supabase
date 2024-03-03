import { z } from "astro/zod";

export const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});
