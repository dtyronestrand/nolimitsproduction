import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr'
import type {LoadEvent as SvelteKitLoadEvent} from '@sveltejs/kit';
import type { LayoutLoad } from './$types'
type ExtendedLoadEvent = SvelteKitLoadEvent & {cookies: { getAll: ()=>Array<{name:string; value: string}>;};
};
export const load: LayoutLoad = async ( event:any) => {
    const {cookies, data, depends, fetch} = event;
  /**
   * Declare a dependency so the layout can be invalidated, for example, on
   * session refresh.
   */
  depends('supabase:auth')

  const supabase = isBrowser()
    ? createBrowserClient(import.meta.env.VITE_PUBLIC_SUPABASE_URL, import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY, {
        global: {
          fetch,
        },
      })
    : createServerClient(import.meta.env.VITE_PUBLIC_SUPABASE_URL, import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY, {
        global: {
          fetch,
        },
        cookies: {
          getAll: ()=> cookies.getAll(),
            /**
             * Ensure `cookies` is passed correctly and formatted for `getAll`.
         */
    
          // or a custom transformation if necessary
            
          }, 
    
     }) 

  /**
   * It's fine to use `getSession` here, because on the client, `getSession` is
   * safe, and on the server, it reads `session` from the `LayoutData`, which
   * safely checked the session using `safeGetSession`.
   */
  const {
    data: { session },
  } = await supabase.auth.getSession()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return { session, supabase, user }
}
