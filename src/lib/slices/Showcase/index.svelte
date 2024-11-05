<script lang="ts">
	import {onMount} from 'svelte';
	import gsap from 'gsap';
	import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
	import type { Content } from '@prismicio/client';
	import SpanHeading from './SpanHeading.svelte';
	import Bounded from '$lib/components/Bounded.svelte';
	import {PrismicRichText, PrismicImage, PrismicText} from '@prismicio/svelte';
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import clsx from 'clsx';
	import GoldText from '$lib/components/GoldText.svelte';
	import Heading3 from '$lib/components/Heading3.svelte';
	import Heading2 from '$lib/components/Heading2.svelte';
	export let slice: Content.NewsItemSlice;

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce').matches;

		if (prefersReducedMotion) return;

		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo(
			'.showcase__heading',
			{
				y: 100
			},
			{
				y: 0,
				ease: 'power2.inOut',
				duration: 1,
				scrollTrigger: {
					trigger: '.showcase__heading',
					start: 'top bottom-=40%',
					toggleActions: 'play pause resume reverse'
				}
			}
		);

		gsap.fromTo(
			'.showcase__glow',
			{
				scale: 0.7,
				opacity: 0.1
			},
			{
				scale: 1,
				opacity: 0.35,
				ease: 'power2.inOut',
				duration: 1,
				scrollTrigger: {
					trigger: '.showcase__heading',
					start: 'top bottom-=40%',
					toggleActions: 'play pause resume reverse'
				}
			}
		);
	});

</script>

<Bounded class="relative" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="showcase__glow absolute -z-10 w-full max-w-2xl aspect-video rounded-full bg-yellow-400/40 mix-blend-screen blur-[120px] filter"/>
	<h2 class="showcase__heading text-balance text-center text-5xl font-medium md:text-7xl">
		<PrismicRichText field={slice.primary.heading} components={{ em: GoldText, heading2: SpanHeading }} />
	</h2>
	{#each slice.primary.content as item}
	<div class="showcase__glow absolute -z-10 w-full max-w-2xl aspect-video rounded-full bg-gradient-to-t from-red-600/50 to-yellow-400/50 via-orange-500/50 mix-blend-screen blur-[120px] filter"/>
	<div class="relative mt-16 grid items-center gap-8 rounded-xl border border-orange-200/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdropblur-sm lg:grid-cols-3 lg:gap-0 lg:py-12">
		<div class="grid-background"/>
		<div>
				<PrismicText field={item.title} components={{em:GoldText, heading3:Heading3}}/>
			<div class="prose prose-invert mt-4 max-w-xl">
				<PrismicRichText field={item.body} />
			</div>
			<ButtonLink field={item.link} class="mt-6"> {item.label || 'Learn More'}</ButtonLink>
		</div>
		{#if item.reverse === false}
		<PrismicImage field={item.image} 
		class={clsx("opacity-90 shadow-2xl lg:col-span-2 lg:pt-0 lg:-order-1 lg:translate-x-[-15%]")} sizes="(max-width: 768px) 100vw, 50vw"/>
		{:else}
		<PrismicImage field={item.image} 
		class={clsx("opacity-90 shadow-2xl lg:col-span-2 lg:order-1 lg:translate-x-[15%]")} sizes="(max-width: 768px) 100vw, 50vw"/>
		{/if}
	</div>
{/each}
</Bounded>
<style>
	.grid-background {
		background-image: url('/assets/grid-pattern.png');
		position: absolute;
		inset: 0;
		background-repeat: repeat;
		z-index: -1;
		background-position: center;
		opacity: 0.25;
		mask-image: radial-gradient(circle at 60% 50%, black 10%, transparent 40%);


	}
</style>