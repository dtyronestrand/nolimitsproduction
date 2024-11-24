// src/routes/contact/+page.server.ts

import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;

        // Validate input fields
        if (!name || !email || !message) {
            return fail(400, {
                error: true,
                message: 'All fields are required.',
                data: { name, email, message }
            });
        }

        try {
            // Handle your backend logic here, for example: send email or save to a database.
            console.log("Form submitted successfully", { name, email, message });

            // Redirect after successful submission
            return redirect(303, '/contact/success');
        } catch (error) {
            console.error('Error while handling contact form:', error);
            return fail(500, {
                error: true,
                message: 'Failed to submit your request. Please try again later.',
                data: { name, email, message }
            });
        }
    }
};
