<script lang="ts">
	import type { Content } from '@prismicio/client';
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading2 from '$lib/components/Heading2.svelte';
	import GoldText from '$lib/components/GoldText.svelte';
	import background from './background.png';
	import {PrismicRichText, PrismicText, PrismicImage} from '@prismicio/svelte';
	export let slice: Content.StaffSlice;
</script>

<Bounded class="relative " data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<img src={background} alt="" class="absolute inset-0 h-full w-full object-cover" />

	<div class="relative">

		<PrismicRichText field={slice.primary.title} components={{heading2:Heading2, em:GoldText}}/>
	</div>
		
	<div class=" flex flex-row mt-12 relative">
		{#each slice.primary.staffcard as item}
		<div class="card glass w-96 mx-8 relative">
			<figure class="mt-6">
				<PrismicImage class="mx-auto w-[1em] h-[10rem] rounded-[50%] min-w-[150px] border-red-700/50" field={item.avatar} />
			</figure>
			<div class="card-body">
				<h3 class="card-title text-2xl md:text-4xl bg-gradient-to-t from-red-700 to-yellow-400 via-orange-600 bg-clip-text text-transparent">	
				<PrismicText field={item.name} />
			</h3>
			<p class="text-slate-300 text-lg" >	
				<PrismicText field={item.bio} />
			</p>
			</div>
		</div>
		
		{/each}
	</div>
</Bounded>
