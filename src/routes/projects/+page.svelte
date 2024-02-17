<script lang="ts">
    import Icon from "./Icon.svelte";
    import { golteStars } from "../../lib/data";
</script>

<h1>My Projects</h1>

<div class="container">
    <article>
        <header>Golte</header>
        <p>
            Golte is a library for Go that allows you to render Svelte
            components inside http handlers. I created it because the Go
            ecosystem lacked a way to monolithically use Go and Svelte together
            while having support for server-side-rendering.
            
            {#if $golteStars}
                It is currently sitting at {$golteStars} stars on GitHub.
            {/if}
        </p>
        <footer>
            <div class="links">
                <a target="_blank" href="https://github.com/nichady/golte">GitHub</a>
            </div>
            <div class="icons">
                <Icon tool="go"/>
                <Icon tool="ts"/>
                <Icon tool="svelte"/>
                <Icon tool="nodejs"/>
            </div>
        </footer>
    </article>

    <article>
        <header>Mjolnir</header>
        <p>
            Mjolnir is a plugin for Minecraft that adds Thor's hammer to the
            game. It can be thrown and can be used to summon lightning. This
            plugin has over 7.5k downloads on SpigotMC.
        </p>
        <footer>
            <div class="links">
                <a target="_blank" href="https://github.com/nichady/mjolnir">GitHub</a>
                <a target="_blank" href="https://www.spigotmc.org/resources/mjolnir-the-hammer-of-thor.79882/">SpigotMC</a>
                <a target="_blank" href="https://youtu.be/5I8hDpJBmKA">Youtube Showcase by Barbercraft</a>
            </div>
            <div class="icons">
                <Icon tool="java"/>
            </div>
        </footer>
    </article>

    <article>
        <header>Plateful</header>
        <p>
            Plateful is an AI-Powered recipe generator. After plugging in
            information about what kind of meal you want, the region of the
            cuisine, and the ingredients you have, Plateful will generate a
            recipe along with images. Plateful uses OpenAI's GPT 3.5-Turbo to
            generate recipes and Google's Programmable Search Engine API to find
            images. This uses the Golte library.
        </p>
        <footer>
            <div class="links">
                <a target="_blank" href="https://github.com/nichady/plateful">GitHub</a>
                <a target="_blank" href="https://plateful.nichady.me">Demo</a>
            </div>
            <div class="icons">
                <Icon tool="go"/>
                <Icon tool="js"/>
                <Icon tool="css"/>
                <Icon tool="html"/>
                <Icon tool="svelte"/>
                <Icon tool="docker"/>
            </div>
        </footer>
    </article>

    <article>
        <header>Pods</header>
        <p>
            Pods is a Python script to spin up a podman stack on a Linux
            machine. It interfaces with Podman's REST endpoint and uses .toml
            files for configuration. I use Pods on my homelab for various
            services.
        </p>
        <footer>
            <div class="links">                
                <a target="_blank" href="https://github.com/nichady/pods">GitHub</a>
            </div>
            <div class="icons">
                <Icon tool="python"/>
                <Icon tool="podman"/>
                <Icon tool="linux"/>
            </div>
        </footer>
    </article>

    <article>
        <header>OneGame</header>
        <p>
            OneGame is a plugin for OneNote 2016 which allows you to play games inside of it. Currently, the only game for it is snake.
        </p>
        <footer>
            <div class="links">
                <a target="_blank" href="https://github.com/nichady/pods">GitHub</a>
            </div>
            <div class="icons">
                <Icon tool="csharp"/>
            </div>
        </footer>
    </article>

    <article>
        <header>Edpuzzle Nodus</header>
        <p>
            This is a browser extension I created to fast forward videos on <a href="https://edpuzzle.com">Edpuzzle</a>.
        </p>
        <footer>
            <div class="links">
                <a target="_blank" href="https://github.com/nichady/edpuzzle-nodus">GitHub</a>
            </div>
            <div class="icons">
                <Icon tool="js"/>
                <Icon tool="html"/>
            </div>
        </footer>
    </article>

    <article>
        <header>Meat&Cheese</header>
        <p>
            A funny game I made when I first started coding.
        </p>
        <footer>
            <div class="links">
                <a target="_blank" href="https://github.com/nichady/meat-cheese-galactic">GitHub</a>
            </div>
            <div class="icons">
                <Icon tool="godot"/>
                <Icon tool="csharp"/>
            </div>
        </footer>
    </article>

    <article>
        <header>nichady.me</header>
        <p>
            This website.
        </p>
        <footer>
            <div class="links">
                <a target="_blank" href="https://github.com/nichady/nichady.me">GitHub</a>
            </div>
            <div class="icons">
                <Icon tool="ts"/>
                <Icon tool="html"/>
                <Icon tool="css"/>
                <Icon tool="svelte"/>
            </div>
        </footer>
    </article>
</div>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }

    article {
        flex: 0 1 600px;
        min-height: 200px;
        border-radius: 15px;
        padding: 20px;
        border: 1px solid var(--dark-2);

        display: flex;
        flex-direction: column;
    }

    article header {
        font-size: 30px;
    }

    article p {
        flex: 1;
    }

    article footer {
        display: flex;
    }

    article a {
        color: inherit;
    }

    .links {
        display: flex;
        flex-wrap: wrap;
        align-items: end;
        justify-content: start;
        gap: 20px;
    }

    .icons {
        flex: 1;
        float: right;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: end;
        justify-content: end;
        gap: 10px;
        font-size: 2em;
    }
</style>
