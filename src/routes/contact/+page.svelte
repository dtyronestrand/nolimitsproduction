<!-- src/routes/contact/+page.svelte -->

<script lang="ts">
    import { invalidate } from '$app/navigation';
    import { page } from '$app/stores';

    let formData = {
        name: '',
        email: '',
        message: ''
    };

    let errorMessage = '';
    let successMessage = '';

    async function handleSubmit(event: Event) {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formDataToSubmit = new FormData(form);

        try {
            const response = await fetch('/contact', {
                method: 'POST',
                body: formDataToSubmit
            });

            if (response.ok) {
                // On success, clear form and display success message
                formData = { name: '', email: '', message: '' };
                errorMessage = '';
                successMessage = 'Form submitted successfully!';
           
            } else {
                const data = await response.json();
                errorMessage = data.message || 'An error occurred. Please try again.';
                successMessage = '';
            }
        } catch (error) {
            errorMessage = 'Failed to submit the form. Please try again later.';
            successMessage = '';
        }
    }
</script>
<h1 class="mb-8 text-balance text-center text-7xl font-medium max-w-3xl mx-auto  md:text-7xl">We Can't Wait to Hear From You</h1>
<form on:submit={handleSubmit} class="card variant-soft-primary rounded-lg px-10 mb-12 contact-form flex flex-col m-auto max-w-[500px]">
    <label class="label text-primary-50 text-lg tracking-wider" for="name">Name:</label>
    <input class="input text-primary-900" type="text" id="name" name="name" bind:value={formData.name} required />

    <label for="email" class="label text-primary-50 text-lg tracking-wider">Email:</label>
    <input class="input text-primary-900" type="email" id="email" name="email" bind:value={formData.email} required />

    <label  class="label text-primary-50 text-lg tracking-wider" for="message">Message:</label>
    <textarea class="textarea text-primary-900" id="message" name="message" bind:value={formData.message} required></textarea>

    {#if errorMessage}
        <p class="error-message">{errorMessage}</p>
    {/if}

    {#if successMessage}
        <p class="success-message">{successMessage}</p>
    {/if}

    <button class="mb-10 mt-8 btn btn-xl variant-filled-primary" type="submit">Send</button>
</form>

<style>
    /* Add some basic styling */


    .contact-form label {
        margin-top: 1rem;
    }

    .contact-form input,
    .contact-form textarea {
        margin-top: 0.5rem;
        padding: 0.5rem;
        font-size: 1rem;
    }

    .error-message {
        color: red;
        font-size: 0.9rem;
        margin-top: 0.5rem;
    }

    .success-message {
        color: green;
        font-size: 0.9rem;
        margin-top: 0.5rem;
    }

    button {
        margin-top: 1rem;
        padding: 0.75rem;
        font-size: 1rem;
        cursor: pointer;
    }
</style>
