import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        events: defineCollection({
            type: 'page',
            source: 'events/**/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string().optional(),
                date: z.string().optional(),
                location: z.string().optional(),
                tags: z.array(z.string()).optional(),
            })
        }),
        misc: defineCollection({
            type: 'page',
            source: 'misc/**/*.md',
        })
    }
})
