<script lang="ts">
	import type { Content } from '@prismicio/client';
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading2 from '$lib/components/Heading2.svelte';
	import GoldText from '$lib/components/GoldText.svelte';
	import background from './background.png';
	import {PrismicRichText, PrismicText, PrismicImage} from '@prismicio/svelte';
	export let slice: Content.StaffSlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div>
		<PrismicRichText field={slice.primary.title} components={{heading2:Heading2, em:GoldText}}/>
	</div>
<div class="flex flex-col md:flex-row mt-10 relative justfy-between ">
  {#each slice.primary.staffcard as item}
<div class="card variant-ghost-primary card-hover mt-8 md:mt-0 md:mr-8">
        <div class="card-header">
         <PrismicImage class="mb-8 " field={item.avatar}/>
        </div>
        <div class=" prose text-4xl py-4 text-amber-100 prose-invert  text-center m-0">
          <PrismicText field={item.name} />
          <div class="card-footer mt-4 prose prose-invert text-2xl text-amber-400">
            <PrismicText  field={item.title}/>
          </div>
  </div>
</div>
    {/each}
</div>
  </Bounded>
  



