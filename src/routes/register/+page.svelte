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
  
  <div class="min-h-screen bg-surfsce-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md mx-auto">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-primary-50 tracking-wider">Create an account</h2>
        <p class="mt-2 text-lg text-primary-50">
          Or
          <a href="/login" class="font-medium text-secondary-300 hover:text-tertiary-700">
            sign in to your account
          </a>
        </p>
      </div>
      
      <RegisterForm {form} />
    </div>
  </div>