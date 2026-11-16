# jannata-resort-replica

> A Nuxt content landing page for a boutique Ubud resort, revived on Nuxt 4 with a redesigned UI.

[![CI](https://github.com/zzeordyga/jannata-resort-replica/actions/workflows/ci.yml/badge.svg)](https://github.com/zzeordyga/jannata-resort-replica/actions/workflows/ci.yml)
[![Live demo](https://img.shields.io/badge/live%20demo-GitHub%20Pages-blue)](https://zzeordyga.github.io/jannata-resort-replica)

## Stack

- **Nuxt 4** (static generate) · **Vue 3** · **TypeScript 5** strict
- **@nuxt/image** (IPX-optimized remote S3 imagery) · **@nuxt/icon**
- Shared revival design tokens (Playfair Display + Inter, responsive)
- **GSAP** for the hero entrance; scroll-reveal via IntersectionObserver

## Features

- Hero slideshow with subtle zoom + auto-rotation (respects reduced-motion)
- Resort intro, accommodations grid with hover-zoom, overlapping dining card,
  fixed-bg spa parallax, guest testimonial carousel, reservation form, footer
- Sticky responsive nav with hamburger drawer on mobile
- `useSeoMeta` SEO + OpenGraph; `prefers-reduced-motion` gating throughout
- Single-page rebuild of the original Nuxt 3 replica — section order corrected,
  legacy SCSS/node-sass dropped, JSON content typed

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck    # vue-tsc --noEmit
npm run generate     # static export to .output/public
```

## Deploy

`nuxt generate` produces a static site at `.output/public`, deployed to
**GitHub Pages** via Actions on green CI (`app.baseURL: /jannata-resort-replica/`).
For AWS, upload `.output/public` to S3 + CloudFront unchanged.

> Note: this is a portfolio revival of a clone. Not affiliated with the
> original Jannata resort site.