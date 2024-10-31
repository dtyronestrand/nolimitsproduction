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
		<div class=" card card-glass border border-white bg-gradient-to-t from-red-700/20 to-yellow-400/10 md:w-[15vw] w-[30vw] h-auto via-orange-500/15 px-5 py-7">
	
				<h3 class="text-balance text-center text-4xl mb-3">
					<PrismicText field={program.data.title}/>
				</h3>
				<div class="mx-auto max-w-md">
						<PrismicText field={program.data.tag_line} />
				</div>
				<figure class="items-center mt-6">
					<PrismicImage  field={program.data.image} alt=''/>
				</figure>
			

					<ButtonLink document={program} class="z-10 mx-auto justify-center mt-7 after:absolute after:inset-0 hover:underline">More about <PrismicText field={program.data.title}/></ButtonLink>
			
			

		</div>
		{/each}
	</div>
</Bounded>
