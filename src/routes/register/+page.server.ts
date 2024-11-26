import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import { supabase } from '$lib/supabase';

export const actions: Actions = {
    register: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        if (typeof email !== 'string' || typeof password !== 'string') {
            return fail(400, { error: 'Invalid form data' });
        }

        if (!email || !password) {
            return fail(400, { error: 'Email and password are required' });
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const { error } = await supabase
                .from('users')
                .insert([{ email, password: hashedPassword }]);

            if (error) {
                return fail(500, { error: 'Failed to register user' });
            }

            throw redirect(303, '/login');
        } catch (err) {
            return fail(500, { error: 'Server error' });
        }
    }
};
