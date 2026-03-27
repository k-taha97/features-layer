import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  extends: [
    'github:k-taha97/ui-layer#main',
    'github:k-taha97/api-layer#main',
    // 'github:k-taha97/identity-layer#main',
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],

  components: [
    { path: './components', global: true },
  ],

  experimental: {
    appManifest: false,
    payloadExtraction: false,
  },

  ssr: false,
})
