// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Anna & Hendrik heiraten!",
    },
  },

  css: [
    "~/assets/scss/theme-default.scss",
  ],

  typescript: {
    typeCheck: true,
  },

  modules: ["@nuxt/eslint"],
});
