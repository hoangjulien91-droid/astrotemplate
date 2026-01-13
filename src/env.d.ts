/**
 * S-TIER GOD MODE — Global Types
 * 
 * Déclarations de types globaux pour le projet Astro.
 * @see https://docs.astro.build/en/guides/typescript/
 */

/// <reference path="../.astro/types.d.ts" />

// ============================================
// ASTRO: Image Service Types
// ============================================
declare module 'astro:assets' {
  export interface ImageMetadata {
    src: string;
    width: number;
    height: number;
    format: string;
  }
}

// ============================================
// ENVIRONMENT VARIABLES
// ============================================
interface ImportMetaEnv {
  readonly SITE_URL: string;
  readonly PUBLIC_SITE_NAME: string;
  // Ajouter d'autres variables d'environnement ici
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// ============================================
// GLOBAL NAMESPACE EXTENSIONS
// ============================================
declare namespace App {
  interface Locals {
    // Ajouter des propriétés middleware ici si nécessaire
  }
}
