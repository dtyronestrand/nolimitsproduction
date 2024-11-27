<script lang="ts">

	import {invalidate} from '$app/navigation';
	import {onMount} from 'svelte';
	import {page} from '$app/stores';
	export let data
	
	let {supabase, session} = data
	$: ({supabase, session}=data)

	onMount(()=>{
		const {data} = supabase.auth.onAuthStateChange((event, newSession)=>{
			if (newSession?.expires_at !== session?.expires_at){
				invalidate('supabase:auth')
			}
		})
		return () => data.subscription.unsubscribe()
	})
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	{#if $page.data.meta_description}
		<meta name="description" content={$page.data.meta_description} />
	{/if}
	{#if $page.data.meta_title}
		<meta name="og:title" content={$page.data.meta_title} />
	{/if}
	{#if $page.data.meta_image}
		<meta name="og:image" content={$page.data.meta_image} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>

<slot/>
