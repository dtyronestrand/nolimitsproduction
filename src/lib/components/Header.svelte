<script>
    import Wordmark from "./Wordmark.svelte";
    import ButtonLink from "./ButtonLink.svelte";
    import {PrismicLink,PrismicText} from '@prismicio/svelte'
    /**@type{import("@prismicio/client").Content.SettingsDocument}*/
    export let settings;
</script>
<header>
<nav aria-label="main" class="hover:backdrop-blur-md filter" >
    <ul class="flex gap-6">
        {#each settings.data.navigation as item, index}
        <li class="z-2 transition-border duration-[0.2s] ease text-decoration-none p-[25px] pb-[3px] pt-[3px] ml-[5px] m-[10px] border-[1px solid gray-400] rounded-[25px] text-3xl hover:border-[1px solid gray-400/50] hover:backdrop-blur-xl hover:filter">
        {#if item.cta_button}
        <ButtonLink field={item.link} >
        {item.label}
        </ButtonLink>
        {:else}
        <PrismicLink  field={item.link} >
       {item.label}
        </PrismicLink>
        {/if}
    </li>
        {/each}
    </ul>
</nav>
</header>

<style>
    nav {
	transition: backdrop-filter 0.3s ease;
	display: flex;
	background-color: rgba(100, 100, 100, 0.2);
	padding: 0px;
	justify-content: center;
	z-index: 1;
	backdrop-filter: blur(
		2px
	); /* Disable this to have a Macos-like top bar
	border-radius: 0px 0px 10px 10px;
	border-top: none;
	margin-left: 50px;
	margin-right: 50px;*/
	border-bottom: 1px solid rgba(255, 255, 255, 0.5);
	min-height: 50px;
	width: 100vw;
	align-items: center;
}


</style>