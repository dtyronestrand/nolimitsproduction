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
<div class="container">
	{#each slice.primary.staffcard as item}
  <div class="box">
    <span></span>
   
    <div class="content">
    	<figure class="mt-6">
				<PrismicImage class="mx-auto w-[1em] h-[10rem] rounded-[50%] min-w-[150px] border-red-700/50" field={item.avatar} />
			</figure>
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
  
  <style>
.container
{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 0;
}

.container .box
{
  position: relative;
  width: 320px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 30px;
  transition: 0.5s;
}

.container .box::before
{
  content:' ';
  position: absolute;
  top: 0;
  left: 50px;
  width: 50%;
  height: 100%;
  text-decoration: none;
  background: #fff;
  border-radius: 8px;
  transform: skewX(15deg);
  transition: 0.5s;
}

.container .box::after
{
  content:'';
  position: absolute;
  top: 0;
  left: 50;
  width: 50%;
  height: 100%;
  background: #fff;
  border-radius: 8px;
  transform: skewX(15deg);
  transition: 0.5s;
  filter: blur(20px);
}

.container .box:hover:before,
.container .box:hover:after
{
  transform: skewX(0deg);
  left: 20px;
  width: calc(100% - 90px);
  
}

.container .box:nth-child(1):before,
.container .box:nth-child(1):after
{
	@apply bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600}

.container .box:nth-child(2):before,
.container .box:nth-child(2):after
{
  background: linear-gradient(315deg, #03a9f4, #ff0058)
}

.container .box:nth-child(3):before,
.container .box:nth-child(3):after
{
  background: linear-gradient(315deg, #4dff03, #00d0ff)
}

.container .box span
{
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  pointer-events: none;
}

.container .box span::before
{
  content:'';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  opacity: 0;
  transition: 0.1s;  
  animation: animate 2s ease-in-out infinite;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08)
}

.container .box:hover span::before
{
  top: -50px;
  left: 50px;
  width: 100px;
  height: 100px;
  opacity: 1;
}

.container .box span::after
{
  content:'';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  opacity: 0;
  transition: 0.5s;
  animation: animate 2s ease-in-out infinite;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  animation-delay: -1s;
}

.container .box:hover span:after
{
  bottom: -50px;
  right: 50px;
  width: 100px;
  height: 100px;
  opacity: 1;
}

@keyframes animate
{
  0%, 100%
  {
    transform: translateY(10px);
  }
  
  50%
  {
    transform: translate(-10px);
  }
}

.container .box .content
{
  position: relative;
  left: 0;
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1;
  transform: 0.5s;
  color: #fff;
}

.container .box:hover .content
{
  left: -25px;
  padding: 60px 40px;
}

.container .box .content h3
{
  font-size: 2em;
  color: #fff;
  margin-bottom: 10px;
}

.container .box .content p
{
  font-size: 1.1em;
  margin-bottom: 10px;
  line-height: 1.4em;
}


</style>
