import { defineCollection, z, reference } from 'astro:content'
import { glob } from 'astro/loaders'

const authorSchema = z.object({
  name: z.string(),
  avatar: z.string(),
  role: z.string(),
  github: z.string().optional(),
  linkedin: z.string().optional(),
  website: z.string().optional(),
  about: z.string(),
  articleCount: z.number().optional(),
})

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string().transform((str) => new Date(str + 'T00:00:00')),
  draft: z.boolean().default(false),
  category: z.string(),
  author: reference("authors"),
})

const articles = defineCollection({
    loader:  glob({ pattern: '**/*.md', base: "./src/content/articles" }),
  schema: articleSchema,
})

const authors = defineCollection({
    loader:  glob({ pattern: '**/*.yaml', base: "./src/content/authors" }),
  schema: authorSchema,
})

export const collections = {
  articles,
  authors
}
