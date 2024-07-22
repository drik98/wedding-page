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
    "~/assets/css/bootstrap.min.css",
    "~/assets/css/owl.carousel.min.css",
    "~/assets/css/magnific-popup.css",
    "~/assets/css/font-awesome.min.css",
    "~/assets/css/themify-icons.css",
    "~/assets/css/nice-select.css",
    "~/assets/css/flaticon.css",
    "~/assets/css/flaticon.css",
    "~/assets/css/gijgo.css",
    "~/assets/css/slicknav.css",
    "~/assets/scss/style.scss",
  ],

  typescript: {
    typeCheck: true,
  },

  modules: ["@nuxt/eslint"],
});
