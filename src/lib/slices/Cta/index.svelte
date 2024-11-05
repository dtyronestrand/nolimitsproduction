<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicText, PrismicLink } from '@prismicio/svelte';
	export let slice: Content.CtaSlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="relative py-32 text-center font-medium md:py-40">
	<diev class="glow absolute -z-10 aspect-square w-full max-2-sm rounded-full bg-yellow-400/50 blur-[160px] filter"/>

	<h2 class="mt-6 text-balance max-w-xl mb-6 text-5xl">
		<PrismicText field={slice.primary.heading} />
	</h2>
	<div class="glass-container rounded-lg bg-gradient-to-b from-orange-500 to-orange-700 p-4 mb-6 md:rounded-xl">

		<PrismicImage field={slice.primary.image} />
	</div>
	<ButtonLink field={slice.primary.link} class="mt-6">	{slice.primary.label}</ButtonLink>

</Bounded>
