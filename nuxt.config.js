export default {
  target: 'static',

  head: {
    title: 'portfolio_nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  components: true,

  css: ['~assets/global.css'],

  plugins: ['~/plugins/i18n.js', '~/plugins/disqus.js'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxt/content', '@nuxtjs/axios'],

  buildModules: [
    '@aceforth/nuxt-optimized-images',
  ],

  optimizedImages: {
    optimizeImages: true
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  env: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://stephenlai-portfolio.netlify.app/'
        : 'http://localhost:3000',
  },

  serverMiddleware: ['~/api'],
}
