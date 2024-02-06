<script lang="ts">
    export let tool: keyof typeof tools;

    const tools = {
        go: { title: "Go", class: "devicon-go-original-wordmark colored" },
        js: { title: "JavaScript", class: "devicon-javascript-plain colored" },
        ts: { title: "TypeScript", class: "devicon-typescript-plain colored" },
        svelte: { title: "Svelte", class: "devicon-svelte-plain colored colored" },
        java: { title: "Java", class: "devicon-java-plain colored" },
        css: { title: "CSS", class: "devicon-css3-plain colored" },
        html: { title: "HTML", class: "devicon-html5-plain colored" },
        docker: { title: "Docker", class: "devicon-docker-plain colored" },
        nodejs: { title: "NodeJS", class: "devicon-nodejs-plain colored" },
        python: { title: "Python", class: "devicon-python-plain colored" },
        podman: { title: "Podman", class: "devicon-podman-plain colored" },
        linux: { title: "Linux", class: "devicon-linux-plain" },
        csharp: { title: "C#", class: "devicon-csharp-plain colored" },
        godot: { title: "Godot", class: "devicon-godot-plain colored" },
    };
</script>

<i {...tools[tool]} />
