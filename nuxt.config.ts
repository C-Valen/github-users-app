// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    // The private keys which are only available within server-side
    githubToken: process.env.GITHUB_TOKEN,
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: 'https://api.github.com/'
    }
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@nuxt/image', '@pinia/nuxt', 'nuxt-icon', '@nuxtjs/color-mode'],
  pinia: {
    autoImports: ['defineStore'],
  },
  imports: {
    dirs: ['./stores']
  },
  svgo: {
    autoImportPath: false
  },
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
    dataValue: 'theme',
  },  
  css: ['@/assets/css/main.css'],
  optimizeCSS: true,
})