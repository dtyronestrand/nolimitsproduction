<script lang="ts">
    import { enhance } from '$app/forms';
    import { invalidate } from '$app/navigation';
	import { supabase } from '$lib/supabase';
    
    // Remove the incorrect import and just declare the type
    interface ActionData {
      error?: string;
      values?: {
        email: string;
      };
    }
    
    export let form: ActionData | null = null;
    
    const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })   
     if (error) {
      console.error('Error:', error.message);
    }
  };

    let email = '';
    let password = '';
    let loading = false;
  </script>
  
  <div class="max-w-md mx-auto mt-8">
    <form 
      method="POST" 
      action="?/login" 
      use:enhance={() => {
        loading = true;
        return async ({ result }) => {
          loading = false;
          if (result.type === 'success') {
            await invalidate('supabase:auth');
          }
        };
      }}
      class="space-y-4 p-4 bg-white rounded-lg shadow"
    >
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          bind:value={email}
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
  
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          bind:value={password}
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
  
      {#if form?.error}
        <div class="text-red-500 text-sm">{form.error}</div>
      {/if}
  
      <button
        type="submit"
        disabled={loading}
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        {loading ? 'Loading...' : 'Sign In'}
      </button>
      <button  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50" on:click={signInWithGoogle}>
        Sign in with Google
    </button>
    </form>
  </div>