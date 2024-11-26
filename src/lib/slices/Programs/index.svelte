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
	<div class="prose prose-inverted mx-auto mt-8 mx-w-md text-balance text-center text-primary-50 text-lg md:text-2xl">
		<PrismicRichText field={slice.primary.body} />
	</div>
	<div class="mt-20 grid gap-16">
		{#each programs as program, index}
		<div class= "card variant-ghost-primary border-2 border-primary-400 relative rounded-lg  p-2 mb-6 md:rounded-xl">
			<div class="glow absolute -z-10 aspect-square w-full max-w-xl h-full rounded-full bg-primary-400/60 blur-[160px] filter"/>
			<div class="card-header prose prose-invert prose-lg tracking-wider">

				<h3 class="text-balance text-center text-4xl mb-3">
					<PrismicText field={program.data.title}/>
				</h3>
				<div class="mx-auto text-balance text-center text-primary-50 max-w-md">
					<PrismicText field={program.data.tag_line} />
				</div>
			</div>
				<div class="text-center mx-auto mt-6">
					<PrismicImage  class="mx-auto" field={program.data.image} alt=''/>
					<div class="card-footer prose prose-invert prose-lg tracking-wider">

						<ButtonLink document={program} class="z-10 mt-7 amx-auto fter:absolute after:inset-0 hover:underline">More about <PrismicText field={program.data.title}/></ButtonLink>
					</div>
				</div>
			

					
			
			

		</div>
		{/each}
	</div>
</Bounded>