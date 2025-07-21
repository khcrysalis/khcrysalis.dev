// @ts-check
import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';

import remarkTOC from './src/plugins/remark-toc.mjs'
import anchors from './src/plugins/anchors.mjs';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    integrations: [
        expressiveCode({
            themes: ['dark-plus'],
        })
    ],

    markdown: {
        remarkPlugins: [
            remarkTOC,
        ],
        rehypePlugins: [
            rehypeHeadingIds,
            anchors
        ]
    },

    adapter: cloudflare({
        platformProxy: {
            enabled: true
        }
    })
});
