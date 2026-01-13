/**
 * S-TIER GOD MODE — Content Collections Configuration
 *
 * SSOT (Single Source of Truth) pour toutes les données du site.
 * Chaque donnée (Portfolio, Config) DOIT résider ici.
 *
 * @see https://docs.astro.build/en/guides/content-collections/
 */
import { defineCollection, z } from "astro:content";

// ============================================
// SCHÉMAS ZOD: Validation Type-Safe
// ============================================

/**
 * Schéma pour le Portfolio Vidéo
 * Utilisé pour les pages /portfolio/[slug]
 */
const portfolioSchema = z.object({
  title: z.string(),
  description: z.string(),
  client: z.string().optional(),
  date: z.coerce.date(),
  thumbnail: z.string(), // Path to thumbnail image
  videoUrl: z.string().url().optional(), // YouTube URL
  videoEmbed: z.string().optional(), // YouTube embed ID
  category: z
    .enum([
      "corporate",
      "event",
      "music",
      "commercial",
      "documentary",
      "wedding",
    ])
    .default("corporate"),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
});

/**
 * Schéma pour la Configuration Entreprise (Singleton)
 * Contient les données de contact, réseaux sociaux, etc.
 */
const configSchema = z.object({
  // Informations Entreprise
  name: z.string(),
  legalName: z.string().optional(),
  description: z.string(),

  // Contact
  email: z.string().email(),
  phone: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    postalCode: z.string(),
    country: z.string(),
  }),

  // Réseaux Sociaux (avec YouTube)
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

  // SEO & Site
  siteUrl: z.string().url(),
  defaultTitle: z.string(),
  defaultDescription: z.string(),
  defaultImage: z.string().optional(),
});

// ============================================
// COLLECTIONS: Définition
// ============================================

/**
 * Collection Portfolio
 * Type: Fichiers MDX dans src/content/portfolio/
 */
const portfolio = defineCollection({
  type: "content",
  schema: portfolioSchema,
});

/**
 * Collection Config (Singleton Pattern)
 * Type: Fichiers JSON dans src/content/config/
 */
const config = defineCollection({
  type: "data",
  schema: configSchema,
});

// ============================================
// EXPORT: Enregistrement des Collections
// ============================================

export const collections = {
  portfolio,
  config,
};
