// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Anna & Hendrik heiraten!",
      meta: [
        { name: 'description', content: 'Feiert mit uns die Hochzeit von Hendrik und Anna am 28. September 2024 in Aachen. Entdeckt alle Details zu unserem besonderen Tag, einschließlich Ort, Dresscode, Geschenkideen und mehr auf unserer Hochzeitsseite.' }
      ],
      htmlAttrs: {
        lang: 'de-DE',
      },
    },
  },

  css: [
    "~/assets/scss/theme-default.scss",
  ],

  typescript: {
    typeCheck: true,
  },

  modules: [
    "@nuxt/eslint",
    "nuxt-purgecss"
  ],
});
