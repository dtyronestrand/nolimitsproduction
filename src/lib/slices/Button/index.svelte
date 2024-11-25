<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';
	import Bounded from '$lib/components/Bounded.svelte';
	export let slice: Content.ButtonSlice;



</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<button class="btn btn-xl variant-ghost-secondary" type="button"><a href="http://localhost:5173/contact">Contact Us!</a></button>
</Bounded>
