// src/routes/login/+page.server.ts
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { createClient } from '@supabase/supabase-js';

// Ensure these are set in your .env file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const actions = {
    googleSignIn: async ({ cookies, url }) => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${url.origin}/auth/callback`,
                skipBrowserRedirect: true
            }
        });

        if (error) {
            return fail(400, { 
                message: 'Google Sign-In failed',
                error: error.message 
            });
        }

        // If using a server-side redirect
        if (data.url) {
            throw redirect(302, data.url);
        }
    },

    signOut: async ({ locals }) => {
        const { error } = await locals.supabase.auth.signOut();
        
        if (error) {
            return fail(500, {
                message: 'Sign out failed',
                error: error.message
            });
        }

        throw redirect(302, '/');
    }
} satisfies Actions;