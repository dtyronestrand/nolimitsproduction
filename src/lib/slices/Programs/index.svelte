<script lang="ts">
	import GoldText from '$lib/components/GoldText.svelte';
	import Heading2 from '$lib/components/Heading2.svelte';
	import Bounded from '$lib/components/Bounded.svelte';
	import {PrismicRichText, PrismicText, PrismicImage} from '@prismicio/svelte';
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import {isFilled, type Content} from '@prismicio/client';
	export let slice: Content.ProgramsSlice;
	export let programs: Content.ProgramDocument[];

	console.log('programs', programs);
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<PrismicRichText field={slice.primary.heading} components={{em:GoldText, heading2:Heading2}}/>
	<div class="prose prose-inverted mx-auto mt-6 mx-w-md text-balance text-center text-slate-500 text-lg md:text-xl">
		<PrismicRichText field={slice.primary.body} />
	</div>
	<div class="mt-20 grid gap-16">
		{#each programs as program, index}
		<div class= "glass-container relative rounded-lg bg-gradient-to-b from-orange-500 to-orange-700 p-4 mb-6 md:rounded-xl">
			<div class="glow absolute -z-10 aspect-square w-full max-w-xl h-full rounded-full bg-yellow-400/50 blur-[160px] filter"/>
	
				<h3 class="text-balance text-center text-4xl mb-3">
					<PrismicText field={program.data.title}/>
				</h3>
				<div class="mx-auto text-balance text-center ax-w-md">
						<PrismicText field={program.data.tag_line} />
				</div>
				<div class="text-center mx-auto mt-6">
					<PrismicImage  class="mx-auto" field={program.data.image} alt=''/>
					<ButtonLink document={program} class="z-10 mt-7 amx-auto fter:absolute after:inset-0 hover:underline">More about <PrismicText field={program.data.title}/></ButtonLink>
				</div>
			

					
			
			

		</div>
		{/each}
	</div>
</Bounded>
