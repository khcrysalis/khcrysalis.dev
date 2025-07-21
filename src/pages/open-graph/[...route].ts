import { getCollection } from 'astro:content'
import { OGImageRoute } from 'astro-og-canvas'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const collectionEntries = await getCollection('posts')

// Map the array of content collection entries to create an object.
// Converts [{ id: 'post.md', data: { title: 'Example', pubDate: Date } }]
// to { 'post.md': { title: 'Example', pubDate: Date } }
const pages = Object.fromEntries(
    collectionEntries.map(({ id, data }) => [id.replace(/\.(md|mdx)$/, ''), data])
)

if (typeof __dirname === 'undefined') {
    globalThis.__dirname = dirname(fileURLToPath(import.meta.url))
}

export const { getStaticPaths, GET } = OGImageRoute({
    param: 'route',
    pages,
    getImageOptions: (_path, page) => ({
        title: page.title,
        description: "sammy's blog post",
        logo: {
            path: 'public/og/og-logo.png',
            size: [80, 80]
        },
        bgGradient: [[21, 21, 21]],
        bgImage: {
            path: 'public/og/og-bg.png',
            fit: 'fill'
        },
        padding: 64,
        font: {
            title: {
                color: [123, 214, 198],
                size: 68,
                weight: 'SemiBold',
                families: ['Inter']
            },
            description: {
                color: [215, 215, 215],
                size: 40,
                weight: 'Medium',
                families: ['Inter']
            }
        },
        fonts: [
            'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-600-normal.ttf',
            'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-500-normal.ttf'
        ]
    })
})
