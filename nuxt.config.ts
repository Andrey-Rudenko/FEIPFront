// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({



  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'], 

  googleFonts: {
    families: {
      'Open Sans': {
        ital: '300..800',
        wght: '300..800',
      },
      'Montserrat': {
        ital: '100..900',
        wght: '100..900',
      }
    }
  }
})
