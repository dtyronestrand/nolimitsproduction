<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';
	import { PrismicImage, PrismicText } from '@prismicio/svelte';
	import Bounded from '$lib/components/Bounded.svelte';
	import GoldText from '$lib/components/GoldText.svelte';
	import Heading2 from '$lib/components/Heading2.svelte';
	import clsx from 'clsx';
	export let slice: Content.BentoSlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<PrismicRichText field={slice.primary.heading} components={{em: GoldText, heading2: Heading2}}/>
	<div class="mx-auto mt-6 max-w-md text-balace text-center text-slate-300">
		<PrismicRichText field={slice.primary.body} />
	</div>
	<div class="grid mt-6 max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10 ">
		{#each slice.primary.box as item}
		<div class={clsx("grid glass-container row-span-3 grid-rows-subgrid gap-4 rounded-lg bg-yellow-950/60 p-4 before:bg-red-100/10 ",item.wide ? 'md:col-span-2' :' md:col-span-1')}>
			<h3 class="text-2xl">
				<PrismicRichText field={item.title} components={{em: GoldText}} />
			</h3>
			<div class="max-w-md text-balance text-slate-300">
				<PrismicRichText field={item.body} />
			</div>
			<PrismicImage class="max-h-36 w-auto " field={item.image} />
		</div>
		{/each}
	</div>

</Bounded>
