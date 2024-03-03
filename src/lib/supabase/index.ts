import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

// Generate TS types:
// 1. Get project ID: pnpx supabase projects list
// 2. Generate types: pnpx supabase gen types typescript --project-id "<PROJECT_ID>" --schema public > src/lib/supabase/types.ts

export const supabase = createClient<Database>(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY,
  {
    auth: {
      flowType: "pkce",
    },
  },
);
