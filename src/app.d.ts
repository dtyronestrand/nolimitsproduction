// src/app.d.ts
import type { SupabaseClient, Session } from '@supabase/supabase-js'
import type {Database} from '$lib/supabase-types'
declare global {
  namespace App {
    interface Locals {
      supabase: SupabaseClient
      safeGetSession(): Promise<{session: Session | null; user: User | null}>
    }
    interface Platform{
      env:{
        COUNTER: DurableObjectNamespace;
      };
      context:{
        waitUntil(promise: Promise<any>): void;
      };
      caches: CacheStorage & {default: Cache}
    }
    interface PageData {
      session: Session | null
      user: User | null
    }
  }
}

export {}