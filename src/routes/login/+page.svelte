<script lang="ts">
    import LoginForm from '$lib/components/Auth/LoginForm.svelte';
    
    interface ActionData {
      error?: string;
      values?: {
        email: string;
      };
    }
    
    export let form: ActionData | null = null;
  </script>
  
  <div class="min-h-screen bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md mx-auto">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-slate-50">Sign in to your account</h2>
        <p class="mt-2 text-sm text-orange-600">
          Or
          <a href="/register" class="font-medium text-yellow-300 hover:text-yellow-400">
            create a new account
          </a>
        </p>
      </div>
      
      <LoginForm {form} />
    </div>
  </div>