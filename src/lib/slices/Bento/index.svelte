<script>
	import clsx from 'clsx';
	import Bounded from '$lib/components/Bounded.svelte';
	import { PrismicImage, PrismicRichText, PrismicText } from '@prismicio/svelte';

	import GoldText from '$lib/components/GoldText.svelte';
	import Heading2 from '$lib/components/Heading2.svelte';

	/** @type {import("@prismicio/client").Content.BentoSlice} */
	export let slice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<PrismicRichText
		field={slice.primary.heading}
		components={{ em: GoldText, heading2: Heading2 }}
	/>
	<div class="mx-auto mt-6 max-w-md text-balance text-center text-gray-300">
		<PrismicRichText field={slice.primary.body} />
	</div>

	
		{#each slice.primary.box as item}
			<div
				class={clsx(
					"card glass-card row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gray-950/60 p-4 before:bg-gray-100/10",
					item.wide ? 'md:col-span-2' : 'md:col-span-1'
				)}
			>
			<div class="flex text-balance text-center flex-row">
				<h3 class="text-2xl">
					<PrismicText field={item.title} />
				</h3>
			</div>
				<div class="prose pose-invert max-w-md text-balance text-gray-300">
					<PrismicRichText field={item.body} />
				</div>
				<div class="avatar">
					<div class="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
					  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
					</div>
				  </div>
			</div>
		{/each}

</Bounded>