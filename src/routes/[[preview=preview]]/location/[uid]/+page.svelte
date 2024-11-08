<script>
	import { SliceZone } from '@prismicio/svelte';
    import Bounded from '$lib/components/Bounded.svelte';
	import { components } from '$lib/slices';
    import TriangleGrid from '$lib/components/TriangleGrid.svelte';
    import {PrismicText, PrismicImage} from '@prismicio/svelte';

	export let data;
  
</script>

<Bounded>
	<div class="relative grid w-full place-items-center text-center">
		<TriangleGrid />
		<h1 class="text-5xl font-medium md:text-7xl">
			<PrismicText field={data.page.data.title} />
		</h1>
		<p class="mb-4 mt-8 max-w-xl text-lg text-yellow-500">
			<PrismicText field={data.page.data.body} />
		</p>
		<figure class="rounded-lg">
			<PrismicImage field={data.page.data.image} />
		</figure>
	</div>

	<div class="prose prose-inverted mx-auto mt-7 md:mt-11">
		<SliceZone slices={data.page.data.slices} {components} />
	</div>
</Bounded>
