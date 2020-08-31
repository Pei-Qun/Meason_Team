const webpack = require('webpack')
const env = require('dotenv').config()

export default {
  mode: 'universal',
  env: env.parsed,
  /*
  ** Headers of the page
  */
  head: {
    title: '迷聲音樂交流平台',
    titleTemplate: '%s | Meason Team',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '迷聲, Meason, 音樂交流, 音樂交流平台, 迷聲公司, 迷聲團隊, 迷聲音樂'},
      { name: 'author', content: '曾霈宭'},
      { name: 'theme-color', content: '#0b0f30'},
      { hid: 'Meason Team', name: 'Meason Team', content: process.env.npm_package_description || '' },
      { name: 'og:title', hid: 'og:title', property: 'og:title', content: '迷聲音樂交流平台 | Meason Team' },
      { name: 'og:description', hid: 'og:description', property: 'og:description', content: '迷聲音樂開發團隊及平台介紹' },
      { name: 'og:type', hid: 'og:type', property: 'og:type', content: 'music' },
      { name: 'og:image', hid: 'og:image', property: 'og:image', content: process.env.metaImg }
    ],
    htmlAttrs: {
      lang: 'zh'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '@/plugins/bootstrap.js'},
    {src: '@/plugins/firebase.js'}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
  }
}
