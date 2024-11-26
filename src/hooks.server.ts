import { createServerClient } from '@supabase/ssr'
import type { Handle } from '@sveltejs/kit'
import { type CookieSerializeOptions } from 'cookie'

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.supabase = createServerClient(
        import.meta.env.VITE_PUBLIC_SUPABASE_URL,
        import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                get: (key) => event.cookies.get(key),
                set: (key, value, options: CookieSerializeOptions) => {
                    event.cookies.set(key, value, {
                        ...options,
                        path: '/'
                    })
                },
                remove: (key, options: CookieSerializeOptions) => {
                    event.cookies.delete(key, {
                        ...options,
                        path: '/'
                    })
                },
            },
        }
    )

    event.locals.getSession = async () => {
        const {
            data: { session },
        } = await event.locals.supabase.auth.getSession()
        return session
    };

    const session = await event.locals.getSession();
    if (event.route.id?.startsWith('/protected')){
        if (!session || session.user.app_metadata?.role !== 'staff'){
            return new Response("Unauthorized", {status: 403} )
        }
    }

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === 'content-range'
        },
    })
}