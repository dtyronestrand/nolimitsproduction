<script>
    import Wordmark from "./Wordmark.svelte";
    /**@type{import("@prismicio/client").Content.SettingsDocument}*/
    export let settings;
</script>

<nav>
    <a href="/"><Wordmark/>
    <span class="sr-only">{settings.data.site_title}</span>
    </a>
</nav>