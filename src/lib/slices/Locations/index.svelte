<script lang="ts">
	import GoldText from '$lib/components/GoldText.svelte';
	import Heading1 from '$lib/components/Heading1.svelte';
	import Bounded from '$lib/components/Bounded.svelte';
	import {PrismicRichText, PrismicText, PrismicImage} from '@prismicio/svelte';
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import {isFilled, type Content} from '@prismicio/client';
	export let slice: Content.LocationsSlice;
	export let locations: Content.LocationDocument[];

	
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<PrismicRichText field={slice.primary.title} components={{em:GoldText, heading1:Heading1}}/>
	<div class="prose prose-inverted mx-auto mt-6 mx-w-md text-balance text-center text-slate-300 text-lg md:text-xl">
		<PrismicRichText field={slice.primary.body} />
	</div>
	<div class="mt-20 flex flex-col md:flex-row ">
		
		{#each locations as location, index}
		
			<div class= "card variant-ghost-primary border-primary-500 border-2 relative rounded-lg p-2 px-4 mx-10 mb-6 md:rounded-xl">
				<div class="glow absolute -z-10 aspect-square w-full max-w-xl h-full rounded-full bg-yellow-400/50 blur-[160px] filter"/>
				<div class="card-header">
					<h2 class="mt-4 prose tracking-wider text-primary-50 prose-invert text-center text-balance maxß-w-xl mb-6 text-4xl mx-auto">
						<PrismicText field={location.data.title} />
					</h2>
				</div>
				<div class="max-w-[400px] max-h-[400px] justify-center text-center mx-auto">
					<PrismicImage class="mx-auto max-w-[15rem]" field={location.data.image} />
					<div class="card--footer prose prose-invert prose-lg tracking-winder text-primary-50">
						<ButtonLink document={location} class="mx-auto mt-6 mb-6 ">Details</ButtonLink>
					</div>
				</div>
		</div>
		{/each}
	</div>
</Bounded>
<style>
.glow::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: inherit;
	border-radius: inherit;
	opacity: 0.5;
	filter: blur(20px);
	z-index: -1;
}

.glow::after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: inherit;
	border-radius: inherit;
	opacity: 0.5;
	filter: blur(20px);
	z-index: -1;
}
</style>