/**
 * S-TIER GOD MODE — Content Collections Configuration
 * 
 * SSOT (Single Source of Truth) pour toutes les données du site.
 * Chaque donnée (Services, Blog, Config) DOIT résider ici.
 * 
 * @see https://docs.astro.build/en/guides/content-collections/
 */
import { defineCollection, z } from 'astro:content';

// ============================================
// SCHÉMAS ZOD: Validation Type-Safe
// ============================================

/**
 * Schéma pour les Services
 * Utilisé pour les pages /services/[slug]
 */
const servicesSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(),
  image: z.string().optional(),
  order: z.number().default(0),
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
  
  // Réseaux Sociaux
  social: z.object({
    facebook: z.string().url().optional(),
    twitter: z.string().url().optional(),
    instagram: z.string().url().optional(),
    linkedin: z.string().url().optional(),
  }).optional(),
  
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
 * Collection Services
 * Type: Fichiers MDX dans src/content/services/
 */
const services = defineCollection({
  type: 'content',
  schema: servicesSchema,
});

/**
 * Collection Config (Singleton Pattern)
 * Type: Fichiers JSON dans src/content/config/
 */
const config = defineCollection({
  type: 'data',
  schema: configSchema,
});

// ============================================
// EXPORT: Enregistrement des Collections
// ============================================

export const collections = {
  services,
  config,
};
