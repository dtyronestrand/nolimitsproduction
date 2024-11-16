<script lang="ts">
    import RegisterForm from '$lib/components/Auth/RegisterForm.svelte';
    
    interface ActionData {
      error?: string;
      values?: {
        email: string;
      };
    }
    
    export let form: ActionData | null = null;
  </script>
  
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md mx-auto">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900">Create an account</h2>
        <p class="mt-2 text-sm text-gray-600">
          Or
          <a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500">
            sign in to your account
          </a>
        </p>
      </div>
      
      <RegisterForm {form} />
    </div>
  </div>