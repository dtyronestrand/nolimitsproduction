<!-- src/routes/login/+page.svelte -->
<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData } from './$types';
  
    import {enhance} from '$app/forms'
    import type {ActionData, SubmitFunction} from './$types.js'
    export let form: ActionData;
    let loading = false
    const handleSubmit: SubmitFunction = ()=>{
      loading = true
      return async ({update})=>{
        update()
        loading = false
      }
    }
    
  </script>
  export let form: ActionData;
</script>

  <div class="min-h-screen bg-surface-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md mx-auto">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-primary-50">Sign in to your account</h2>
        <form method="POST" use:enhance={handleSubmit}>
        <p>Enter your email address below to receive a one-time login link.</p>
        {#if form?.message !==undefined}
        <div class="success {form?.success ? `` : `fail`}">
          {form?.message}
        </div>
        {/if}
        <p class="mt-2 text-lg text-orange-600">
          Or
          <a href="/register" class="font-medium text-amber-200 hover:text-yellow-400">
            create a new account
          </a>
        </p>
<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
      <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
          </h2>
      </div>
      
      {#if form?.message}
          <div class="text-red-500 text-center">
              {form.message}
          </div>
      {/if}
      
      <form method="POST" action="?/googleSignIn" use:enhance>
          <button 
              type="submit" 
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg class="h-5 w-5 text-blue-500 group-hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                  </svg>
              </span>
              Sign in with Google
          </button>
      </form>
  </div>
</div>