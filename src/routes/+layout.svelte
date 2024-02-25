<script lang="ts">
    import "@fontsource/inter";
    import "devicon/devicon.min.css";
    import "./app.css";
    import { onMount } from "svelte";
    import { fetchData } from "../lib/data";

    onMount(fetchData);
</script>

<nav>
    <a href="/">Home</a>
    <a href="/projects">Projects</a>
</nav>

<main>
    <slot />
</main>

<style>
    nav {
        height: 50px;
        border-bottom: 1px solid var(--dark-2);

        font-family: Inter, sans-serif;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav a {
        text-decoration: none;
        color: inherit;
        height: 100%;
        padding: 0 20px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav a:hover {
        background: var(--dark-2);
    }

    main {
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
