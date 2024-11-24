<script lang="ts">
	import type { Content } from '@prismicio/client';
	import Bounded from '$lib/components/Bounded.svelte';
	import { PrismicRichText } from '@prismicio/svelte';
	import Heading1 from '$lib/components/Heading1.svelte';
	import GoldText from '$lib/components/GoldText.svelte';
	export let slice: Content.RichTextSlice;
</script>

<Bounded>
		<div class="prose prose-xl prose-invert w-full">
			<PrismicRichText field={slice.primary.content} components={{heading1: Heading1, em:GoldText}}/>
		</div>

	</Bounded>


