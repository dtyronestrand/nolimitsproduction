<script>
	import { SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';

	export let data;
console.log(data);
	
</script>


<SliceZone slices={data.slices} {components} />
