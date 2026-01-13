// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import AstroPWA from "@vite-pwa/astro";

// S-TIER GOD MODE — Astro V5 Configuration
export default defineConfig({
  // ============================================
  // CORE: Static Site Generation (SSG)
  // ============================================
  output: "static",
  site: "https://example.com", // TODO: Remplacer par l'URL de production
  prefetch: true, // Navigation instantanée

  // ============================================
  // INTEGRATIONS: Islands Architecture
  // ============================================
  integrations: [
    react(),
    sitemap(),
    AstroPWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,avif,webp}"],
        navigateFallback: "/404",
      },
      manifest: {
        name: "Mon Projet S-Tier",
        short_name: "S-Tier",
        description: "Application S-Tier God Mode",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],

  // ============================================
  // VITE: Tailwind v4 Plugin
  // ============================================
  vite: {
    plugins: [tailwindcss()],
  },

  // ============================================
  // IMAGE: Sharp Build-Time Optimization
  // ============================================
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
