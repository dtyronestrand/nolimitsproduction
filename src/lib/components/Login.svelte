<script>
  import { createBrowserClient } from '@supabase/ssr'
 
  
  const supabase = createBrowserClient(
      import.meta.env.VITE_PUBLIC_SUPABASE_URL,
      import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY
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

<form>
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

</form>