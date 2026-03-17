import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const cvs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cvs" }),
  schema: z.object({
    title: z.string(),
    short: z.string(),
    description: z.string(),
    keywords: z.string(),
    icon: z.string(),
    accent: z.string(),
    slug: z.string(),
    order: z.number(),
  }),
});

export const collections = { cvs };
