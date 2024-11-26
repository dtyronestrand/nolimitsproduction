<!-- src/lib/components/ButtonLink.svelte -->

<script>
	import clsx from 'clsx';
	import { PrismicLink } from '@prismicio/svelte';

	/** @type {string | undefined} */
	let className = undefined;
	export { className as class };
</script>

<PrismicLink
	field={$$restProps.field}
	document={$$restProps.document}
	{...$$restProps}
	on:click
	class={clsx(
		'btn btn-xl variant-ghost-secondary',
		className
	)}
>
	<slot />
</PrismicLink>