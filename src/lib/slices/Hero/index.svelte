<script lang="ts">
	import type { Content } from '@prismicio/client';
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import { PrismicRichText, PrismicLink, PrismicImage, PrismicText } from '@prismicio/svelte';
	import Bounded from '$lib/components/Bounded.svelte';
	import TriangleGrid from '$lib/components/TriangleGrid.svelte';
	export let slice: Content.HeroSlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="relative text-center">
		<TriangleGrid/>
		<h1 class="text-balance text-5xl font-medium max-w-3xl mx-auto  md:text-7xl">
			<PrismicText field={slice.primary.title} />
		</h1>
		<p class="text-balance mx-auto mt-6 max-w-md text-slate-300">
			<PrismicText field={slice.primary.body} />
		</p>
<div class="mx-auto mt-16 w-fit glass-container-logo">
	<div class="absolute left-1/3 top-0 -z-10 h-2/3 w-2/3 bg-yellow-400/50 mix-blend-screen blur-[120px] filter"/>
	<div class="absolute left-0 top-1/3 -z-10 h-2/3 w-2/3 bg-orange-600/50 mix-blend-screen blur-[120px] filter"/>

	<PrismicImage class="rounded-[50%]" field={slice.primary.logo} />
</div>
		<ButtonLink class="mt-8" field={slice.primary.button_link}>{slice.primary.button_label}</ButtonLink>

	</div>
</Bounded>
