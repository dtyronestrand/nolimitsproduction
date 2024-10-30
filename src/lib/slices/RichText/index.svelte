<script lang="ts">
	import type { Content } from '@prismicio/client';
	import Bounded from '$lib/components/Bounded.svelte';
	import { PrismicRichText } from '@prismicio/svelte';
	import Heading1 from '$lib/components/Heading1.svelte';

	export let slice: Content.RichTextSlice;
</script>

<Bounded class="">
	<PrismicRichText
		field={slice.primary.content}
		components={{
			heading1: Heading1
		}}
	/>
	</Bounded>


