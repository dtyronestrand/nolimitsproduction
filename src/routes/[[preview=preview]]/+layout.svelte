<script>
   	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/stores';
	import { repositoryName } from '$lib/prismicio';
	import "../../app.css";
	import '@fontsource/protest-riot';
	// Supports weights 100-900
import '@fontsource-variable/dm-sans';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
   
</script>

<Header settings={$page.data.settings} />
<main>
	<slot />
</main>
<Footer	settings={$page.data.settings}/>
<PrismicPreview {repositoryName} />