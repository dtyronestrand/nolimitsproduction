<script>
  import { createBrowserClient } from '@supabase/ssr'
  import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
  
  const supabase = createBrowserClient(
      PUBLIC_SUPABASE_URL,
      PUBLIC_SUPABASE_ANON_KEY
  )

  let email = '';
  let password = '';

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Error:', error.message);
    } else {
      console.log('User signed in:', data.user);
    }
  };

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Error:', error.message);
    } else {
      console.log('User signed up:', data.user);
    }
  };


  

</script>

<div class="bg-red-400">
  <!-- Your existing email/password form -->
  <input
      type="email"
      placeholder="Email"
      bind:value={email}
  />
  <input
      type="password"
      placeholder="Password"
      bind:value={password}
  />
  <button on:click={handleLogin}>Log In</button>
  <button on:click={handleSignUp}>Sign Up</button>

  <!-- Add OAuth button -->

</div>