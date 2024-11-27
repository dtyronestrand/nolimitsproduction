import { redirect, fail } from '@sveltejs/kit';

import type {Actions, PageServerLoad} from './$types';

// Define types for load and actions

export const load: PageServerLoad = async ({locals:{safeGetSession}}) => {
const {session} = await safeGetSession();

  // If user is already logged in, redirect to home
  if (session) {
    throw redirect(303, '/');
  }

  return {};
};

export const actions: Actions = {
  default: async (event) => {
    const{
      
      request,
      locals:{supabase},
    } = event 
    const formData = await request.formData();
    const email = formData.get('email') as string;
    // eslint-disable-next-line no-useless-escape
    const validEmail = /^[\w-\.+]+@([\w-]+\.)+[\w-]{2,8}$/.test(email)
    if (!validEmail) {
      return fail(400, { errors: { email: 'Please enter a valid email address' }, email })
    }
   

    const { error } = await supabase.auth.signInWithOtp({
      email
    });

    if (error) {
      return fail(400, {
        error: error.message,
     email
      });
    }

   return {
    success: true,
    message: 'Please check your email for a one-time login link',
   }
  }
};