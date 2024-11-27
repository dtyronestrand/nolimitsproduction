import {createBrowserClient, createServerClient, isBrowser} from'@supabase/ssr'
import type {LayoutLoad} from './$types'

export const load: LayoutLoad = async ({fetch, data, depends})=>{
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
        cookies:{
            getAll() {
                return data.cookies
            },
        },
})
const {
    data: {session},
}= await supabase.auth.getSession()
const { data: user } = await supabase.auth.getUser()
return { supabase, session, user }
}