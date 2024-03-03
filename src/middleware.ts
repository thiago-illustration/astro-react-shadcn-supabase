import { sequence } from "astro:middleware";

import { withAuth } from "@lib/middlewares/auth";

export const onRequest = sequence(withAuth);
