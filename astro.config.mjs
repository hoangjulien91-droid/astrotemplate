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
  site: "https://remicapdeville.fr",
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
        globIgnores: ["**/videos/**"],
        navigateFallback: "/404",
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
      },
      manifest: {
        name: "Rémi Capdeville | Vidéaste",
        short_name: "Rémi Capdeville",
        description: "Vidéaste professionnel - Création de contenus cinématiques",
        theme_color: "#0A0A0A",
        background_color: "#0A0A0A",
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
