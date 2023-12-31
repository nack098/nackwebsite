import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    createdAt: z
      .string()
      .or(z.date())
      .transform(val => new Date(val)),
    updatedAt: z
      .string()
      .optional()
      .transform(str => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional()
  })
})

export const collections = { posts }
