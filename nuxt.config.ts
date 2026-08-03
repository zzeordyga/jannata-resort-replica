// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },

  modules: ['@nuxt/image', '@nuxt/icon'],

  css: ['~/assets/css/tokens.css', '~/assets/css/main.css'],

  app: {
    baseURL: '/jannata-resort-replica/',
    head: {
      title: 'Jannata — Luxury Villas & Resort, Ubud Bali',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Jannata — a boutique luxury villa resort in Ubud, Bali. Spa, dining, and private pool villas surrounded by rice terraces.',
        },
        { property: 'og:title', content: 'Jannata — Luxury Villas & Resort' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:description',
          content: 'A boutique luxury villa resort in Ubud, Bali.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/jannata-resort-replica/favicon.png' }],
    },
  },

  image: {
    domains: ['vold-chain-hotel.s3-ap-southeast-1.amazonaws.com', 'jannataresort.com'],
    quality: 72,
  },

  nitro: {
    prerender: { crawlLinks: true },
  },

  typescript: { strict: true },
});