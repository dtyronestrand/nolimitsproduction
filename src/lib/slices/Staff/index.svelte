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
<div class="flip-card card card-glass bg-transparent w-[20rem] h-[25rem] my-8 md:mx-8">
  <div class="flip-card-inner relative w-[100%] h-[100%] text-center">
    <div class="flip-card-front flex flex-col justify-evenly ">
      <div class="avatar mx-auto">
        <div class="ring-primary ring-offset-base-100 w-28 rounded-full ring ring-offset-2">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
        <div class="name text-[1.5em] text-center m-0">
          <PrismicText field={item.name} />
      </div>
    </div>
    <div class="flip-card-back flex flex-col justify-evenly ">
          <PrismicText class="description" field={item.bio} />
    </div>
  </div>
</div>
    {/each}
</div>
  </Bounded>
  
  <style>
.flip-card {
  
  perspective: 1000px;
}
.flip-card-inner{
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 3px solid;
  @apply border-stone-500;
  border-radius: 1rem;
  color: #0f172a;
  box-shadow: 0 0 0.3em rgba(255, 255, 255, 0.5);
  font-weight: 700;
}
.flip-card-back,
.flip-card-back::before {
  background-image: linear-gradient(160deg, #facc15 0%, #f97316 100%);
}
.flip-card-front,
.flip-card-front::before{  background: linear-gradient(43deg, rgb(220, 38, 38) 0%, rgb(234, 88, 12) 46%, rgb(250, 204, 21) 100%);
}

.flip-card-back {
  transform: rotateY(180deg);
}

.flip-card-front::before,
.flip-card-back::before {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: '';
  width: 110%;
  height: 110%;
  position: absolute;
  z-index: -1;
  border-radius: 1em;
  filter: blur(20px);
  animation: animate 5s linear infinite;
 
}

@keyframes animate {
  0% {
    opacity: 0.3;
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0.3;
  }
}
</style>
