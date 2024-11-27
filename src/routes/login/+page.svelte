<script lang="ts">
  
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
      </div>
      
      
        <!-- Your existing email/password form -->
        <input
        id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={form?.email ?? ''}
        />
  {#if form?.errors?.email}
  <span class="flex items-center text-md error">
    {form?.errors?.email}

  </span>
  {/if}
  <div>

    <button class="button primary block">{loading ? `Loading` : `Send Login Link`}</button>
  
  </div>

       
      
        <!-- Add OAuth button -->
      
      </div>
    </div>