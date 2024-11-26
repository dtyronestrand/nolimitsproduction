<script lang="ts">
    import { enhance } from '$app/forms';
    import { invalidate } from '$app/navigation';
    
    interface ActionData {
      error?: string;
      values?: {
        email: string;
      };
    }
    
    export let form: ActionData | null = null;
    
    let email = '';
    let password = '';
    let confirmPassword = '';
    let loading = false;
    
    $: passwordsMatch = password === confirmPassword;
  </script>
  
  <div class="max-w-md mx-auto mt-8">
    <form 
      method="POST" 
      action="?/register" 
      use:enhance={() => {
        loading = true;
        return async ({ result }) => {
          loading = false;
          if (result.type === 'success') {
            await invalidate('supabase:auth');
          }
        };
      }}
      class="space-y-4 p-4 variant-ghost-primary border-2 border-primary-400 rounded-lg shadow"
    >
      <div>
        <label for="email" class="label block text-lg font-medium text-primary-50">Email</label>
        <input
          id="email"
          name="email"
          type="email input"
          bind:value={email}
          required
          class="mt-1 block w-full rounded-md text-secondary-900 border-secondary-500 shadow-sm focus:border-tertiary-700 focus:ring-tertiary-700"
        />
      </div>
  
      <div>
        <label for="password" class=" label block text-lg font-medium text-primary-50">Password</label>
        <input
          id="password"
          name="password"
          type="password input"
          bind:value={password}
          required
          minlength="6"
          class="mt-1 block w-full rounded-md text-secondary-900 border-secondary-500 shadow-sm focus:border-tertiary-700 focus:ring-tertiary-700"
        />
      </div>
  
      <div>
        <label for="confirmPassword" class="block label text-lg font-medium text-primary-50">Confirm Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password input"
          bind:value={confirmPassword}
          required
          minlength="6"
          class="mt-1 block w-full rounded-md border-secondary-500 text-secondary-900 shadow-sm focus:border-tertiary-700 focus:ring-tertiary-700"
        />
        {#if confirmPassword && !passwordsMatch}
          <p class="text-red-500 text-sm mt-1">Passwords do not match</p>
        {/if}
      </div>
  
      {#if form?.error}
        <div class="text-red-500 text-sm">{form.error}</div>
      {/if}
  
      <button
      formaction="?/register"
        type="submit"
        disabled={loading || !passwordsMatch}
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-primary-50 bg-secondary-600 hover:bg-tertiary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tertiary-500 disabled:opacity-50"
      >
        {loading ? 'Loading...' : 'Register'}
      </button>
    </form>
  </div>