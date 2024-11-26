<script lang="ts">
	let email = '';
	let password = '';
	let errorMessage = '';

	const register = async () => {
		let formData = new FormData();
		formData.append('email', email);
		formData.append('password', password);

		const response = await fetch('/register', {
			method: 'POST',
			body: formData
		});

		const result = await response.json();
		if (response.ok) {
			window.location.href = '/login';
		} else {
			errorMessage = result.error;
		}
	};
</script>

<form on:submit|preventDefault={register}>
	<div>
		<label for="email">Email:</label>
		<input id="email" type="email" bind:value={email} required />
	</div>
	<div>
		<label for="password">Password:</label>
		<input id="password" type="password" bind:value={password} required />
	</div>
	<button type="submit">Register</button>
	{#if errorMessage}
		<p style="color: red;">{errorMessage}</p>
	{/if}
</form>
