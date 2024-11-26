import { createClient } from '$lib/prismicio';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch, cookies, locals, route }) => {
  // Create Prismic client
  const client = createClient({ fetch, cookies });

  // Get session information
  const session = await locals.getSession();

  // Apply role check only for protected routes (example: routes starting with '/protected')
  if (route.id?.startsWith('/protected')) {
    // Check if the user is authorized to access the protected page
    if (!session || session.user?.app_metadata?.role !== 'staff') {
      console.log('Unauthorized access. Redirecting to /login.');
      throw redirect(303, '/login'); // Redirect to login if the user is not authorized
    }
  }

  // Fetch Prismic settings
  const settings = await client.getSingle('settings');

  return {
    settings,
    session,
    user: session?.user ?? null, // Return user info if session exists, otherwise null
  };
};