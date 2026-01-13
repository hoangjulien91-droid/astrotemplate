/**
 * S-TIER GOD MODE — Content Collections Configuration (Astro 5)
 */
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// ============================================
// SCHÉMAS ZOD
// ============================================

const portfolioSchema = z.object({
  title: z.string(),
  description: z.string(),
  client: z.string().optional(),
  date: z.coerce.date(),
  thumbnail: z.string(),
  videoUrl: z.string().url().optional(),
  videoEmbed: z.string().optional(),
  category: z
    .enum(["corporate", "event", "music", "commercial", "documentary", "wedding"])
    .default("corporate"),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
});

const configSchema = z.object({
  name: z.string(),
  legalName: z.string().optional(),
  description: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    postalCode: z.string(),
    country: z.string(),
  }),
  social: z
    .object({
      facebook: z.string().url().optional(),
      twitter: z.string().url().optional(),
      instagram: z.string().url().optional(),
      linkedin: z.string().url().optional(),
      youtube: z.string().url().optional(),
      vimeo: z.string().url().optional(),
      tiktok: z.string().url().optional(),
    })
    .optional(),
  siteUrl: z.string().url(),
  defaultTitle: z.string(),
  defaultDescription: z.string(),
  defaultImage: z.string().optional(),
});

// ============================================
// COLLECTIONS
// ============================================

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),
  schema: portfolioSchema,
});

const config = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/config" }),
  schema: configSchema,
});

export const collections = {
  portfolio,
  config,
};
