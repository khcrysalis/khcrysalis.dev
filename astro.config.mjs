import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import svelte from "@astrojs/svelte";

export default defineConfig({
	output: "server",
	adapter: cloudflare(),
	integrations: [svelte()],
	experimental: {
		viewTransitions: true
	},
	markdown: {
        rehypePlugins: []
    },
});