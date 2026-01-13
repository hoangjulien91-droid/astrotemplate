# 🚀 Astro S-TIER GOD MODE Template

[![Astro](https://img.shields.io/badge/Astro-5.0-BC52EE?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-5A0FC8?logo=pwa)](https://web.dev/progressive-web-apps/)

Template Astro V5 configuré selon le standard **S-TIER GOD MODE BIBLE** — Architecture Islands · Performance 100/100 · Zero JS Default.

## ✨ Features

- ⚡ **Astro 5.0** — Framework statique ultra-rapide
- 🏝️ **Islands Architecture** — Zero JS par défaut, hydratation partielle
- 🎨 **Tailwind CSS v4** — Styling moderne via Vite plugin
- 📝 **Content Collections** — Data type-safe avec Zod
- 🔍 **SEO Ready** — Composant SEO centralisé avec JSON-LD
- 📱 **PWA Ready** — Service Worker et manifest configurés
- 🖼️ **Image Optimization** — Sharp pour AVIF/WebP automatique
- 🚀 **View Transitions** — Navigation SPA-like native
- 📦 **React Islands** — Pour composants interactifs (Shadcn ready)

## 🚀 Quick Start

```bash
# Cloner le template
npx degit YOUR_USERNAME/astro-s-tier-template mon-projet

# Installer les dépendances
cd mon-projet
npm install

# Lancer le dev server
npm run dev
```

## 📁 Structure

```
src/
├── components/
│   ├── ui/           # Composants primitifs (Shadcn/React)
│   ├── islands/      # Composants interactifs (client:*)
│   └── SEO.astro     # SEO centralisé
├── content/
│   ├── config.ts     # Schémas Zod
│   ├── config/       # Config singleton (company.json)
│   └── services/     # Collections MDX
├── layouts/
│   └── Layout.astro  # Layout maître + ViewTransitions
├── pages/
│   └── index.astro   # File-system routing
└── env.d.ts          # Types globaux
```

## ⚙️ Configuration

### 1. URL de Production

Modifier `astro.config.mjs`:

```javascript
site: 'https://votre-domaine.com',
```

### 2. Données Entreprise

Éditer `src/content/config/company.json`:

```json
{
  "name": "Votre Entreprise",
  "email": "contact@votre-domaine.com",
  ...
}
```

### 3. Icônes PWA

Ajouter dans `/public/`:

- `pwa-192x192.png`
- `pwa-512x512.png`
- `apple-touch-icon.png`

## 🏝️ Islands Strategy

```astro
<!-- Statique par défaut -->
<Card title="Service" />

<!-- Interactif au scroll -->
<ContactForm client:visible />

<!-- Interactif immédiat -->
<Navbar client:load />

<!-- Basse priorité -->
<Analytics client:idle />
```

## 📜 Scripts

| Commande          | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Dev server sur localhost:4321 |
| `npm run build`   | Build statique dans `dist/`   |
| `npm run preview` | Preview du build              |

## 📖 S-TIER Bible

Ce template suit les règles du [S-TIER GOD MODE BIBLE](docs/S-TIER-BIBLE.md):

- ✅ Zero JS Default
- ✅ HTML est Roi
- ✅ Islands Architecture stricte
- ✅ TypeScript Strict
- ✅ Content Collections SSOT
- ✅ 100/100 Lighthouse cible

## 📄 License

MIT © [Votre Nom]
