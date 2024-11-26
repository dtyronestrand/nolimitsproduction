import { redirect, fail } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import type {Actions} from './$types'
// Define types for load and actions

export const load: PageServerLoad = async ({locals}) => {


  // If user is already logged in, redirect to home
  if (locals.session) {
    throw redirect(303, '/');
  }

  return {session: null};
};

export const actions = {
  login: async ({ request, locals: { supabase } }: RequestEvent) => {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      return fail(400, {
        error: error.message,
        values: {
          email
        }
      });
    }

    throw redirect(303, '/');
  }
};