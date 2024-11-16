import { redirect, fail } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async ( { locals } ) => {


  // If user is already logged in, redirect to home
  if (locals.session) {
    throw redirect(303, '/');
  }

  return {session: null};
};

export const actions = {
  register: async ({ request, locals: { supabase } }: RequestEvent) => {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (password !== confirmPassword) {
      return fail(400, {
        error: 'Passwords do not match',
        values: { email }
      });
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${request.headers.get('origin')}/auth/callback`
      }
    });

    if (error) {
      return fail(400, {
        error: error.message,
        values: { email }
      });
    }

    return {
      message: 'Please check your email for a confirmation link.'
    };
  }
};