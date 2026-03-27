import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineNuxtConfig } from 'nuxt/config'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  extends: [
    'github:k-taha97/ui-layer#main',
    'github:k-taha97/api-layer#main',
    // 'github:k-taha97/identity-layer#main',
  ],

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    'nuxt-viewport',
  ],

  alias: {
    '@features': join(currentDir, './'),
  },

  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  components: [
    { path: './components', global: true },
  ],

  experimental: {
    appManifest: false,
    payloadExtraction: false,
  },

  ssr: false,
})
