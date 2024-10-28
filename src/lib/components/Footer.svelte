<script>
    import Wordmark from "./Wordmark.svelte";
    import {PrismicLink} from '@prismicio/svelte'
    /**@type{import("@prismicio/client").Content.SettingsDocument}*/
    export let settings;
</script>
<footer class="block w-[100%] max-h-[25vh] bg-zinc-800/40">
        <div class="md:p-[2rem] p-[1 rem] md:flex block items-center justify-center relative">
            <section class="mx-[40px] my-0 items-left justify-left md:flex md:items-center md:justify-center md:w-[100%]">
                <span class="px-[1 rem]"><i class="fa fa-map-marker text-orange-600 text-lg md:text-xl px-3"/></span><span class="text-yellow-500">No Limits Martial Arts and Fitness<br/>Beaverdam, VA</span>
            </section>
            <section class="mx-[40px] my-0 items-left justify-left md:flex md:items-center md:justify-center md:w-[100%]">
                <span class="px-[1 rem]"><i class="fa fa-phone text-orange-600 text-lg md:text-xl px-3"/></span><span class="text-yellow-500">804-867-5309</span>
            </section>
            <section class="mx-[40px] my-0 items-left justify-left md:flex md:items-center md:justify-center md:w-[100%]">
                <span class="px-[1 rem]"><i class="fa fa-envelope text-orange-600 text-lg md:text-xl px-3"/></span><span class="text-yellow-500">questions@nolimitsmaf.com</span>
            </section>
        </div>
        <span class="w-[100%] before:w-[100%] before:left-[120px] after:w-[100%] after:right-[120px]"></span>
        <nav>    
        <ul class="px-[1,5rem] py-[2rem] flex items-center justify-center">
            {#each settings.data.navigation as item}
            <li >
                <PrismicLink class="text-yellow-500 md:mx-0 md:my-[20px]  md:tranition-color md:duration:0.5s min-h-11 items-center p-[1rem] text-md mx-0 my-[5px] inline-block hover:text-orange-600/100" field={item.link}/>
            </li>
            {/each}
        </ul>
        <div class="px-[0.8rem] py-0 bg-zinc-700 text-center text-yellow-500 text-lg">Copyright 2024 No Limits Martial Arts and Fitness - All rights resered</div>
    </nav>
</footer>