/// <reference types="astro/client" />

interface ImportMetaEnv {
  // App
  readonly PUBLIC_BASE_URL: string;

  // Supabase
  readonly SUPABASE_PROJECT_REF: string;
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace App {
  interface Locals {
    user: import("@supabase/supabase-js").User;
    session: import("@supabase/supabase-js").Session;
  }
}
