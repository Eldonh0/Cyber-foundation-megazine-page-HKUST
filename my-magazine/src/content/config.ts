import { defineCollection, z } from 'astro:content';

const magazines = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    issueNumber: z.number(),
    date: z.date(),
    cover: z.string(),
    description: z.string(),
    articles: z.array(
      z.object({
        title: z.string(),
        author: z.string(),
      })
    ),
  }),
});

export const collections = { magazines };