import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
  // Get session information from locals
  const session = await locals.getSession();

  // Check if the user is authorized to access the protected pages
  if (!session || session.user?.app_metadata?.role !== 'staff') {
    throw redirect(303, '/login'); // Redirect to login if the user is not authorized
  }

  // Return session and user information if authorized
  return {
    session,
    user: session.user,
  };
};