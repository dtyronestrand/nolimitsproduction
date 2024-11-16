// src/hooks.server.ts
import { createServerClient } from '@supabase/ssr'
import { redirect, type Handle } from '@sveltejs/kit'
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createServerClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get: (key) => event.cookies.get(key),
        set: (key, value, options) => {
          event.cookies.set(key, value, {
            ...options,
            path: '/'
          })
        },
        remove: (key, options) => {
          event.cookies.delete(key, {
            ...options,
            path: '/'
          })
        },
      },
    }
  )

  // Get the session and store it in locals
  const {
    data: { session },
  } = await event.locals.supabase.auth.getSession()
  
  event.locals.session = session

  // Protected routes
  if (event.url.pathname.startsWith('/protected')) {
    if (!session) {
      throw redirect(303, '/login')
    }
  }

  const response = await resolve(event)
  return response
}