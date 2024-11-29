import { createClient } from '$lib/prismicio';
import type {LayoutServerLoad} from './$types'

export const load: LayoutServerLoad = async ({ fetch, cookies, locals:{safeGetSession} })=> {
	const {session, user} = await safeGetSession()
	const client = createClient({ fetch, cookies });

	const settings = await client.getSingle("settings");

	return {
		settings,
		session,
		user,
		cookies: cookies.getAll()
	};
}

