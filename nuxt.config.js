import colors from 'vuetify/es5/util/colors'

let development = process.env.NODE_ENV !== 'production'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - rese-nuxt',
    title: 'rese-nuxt',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/common.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/date-fns',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/date-fns',
    'cookie-universal-nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: development ? 'http://localhost' : 'https://fast-mountain-56075.herokuapp.com',
    credentials: true,
  },

  auth: {
    localStorage: false,
    strategies: {
      local: false,
      user: {
        scheme: 'local',
        user: {
          property: "user",
        },
        token: {
          property: "token",
        },
        endpoints: {
          login: { url: '/api/v1/users/login', method: 'post'},
          logout: { url: 'api/v1/users/logout', method: 'post', propertyName: 'message' },
          user: { url: '/api/v1/users', method: 'get', propertyName: 'user'}
        },
      },
      owner_user: {
        scheme: 'local',
        user: {
          property: "owner",
        },
        token: {
          property: "owner_token",
        },
        endpoints: {
          login: { url: '/api/v1/owners/login', method: 'post'},
          logout: { url: 'api/v1/owners/logout', method: 'post', propertyName: 'message' },
          user: { url: '/api/v1/owners', method: 'get', propertyName: 'owner'}
        },
      },
      admin_user: {
        scheme: 'local',
        admin_user: {
          property: "admin",
        },
        token: {
          property: "admin_token",
        },
        endpoints: {
          login: { url: '/api/v1/admins/login', method: 'post'},
          logout: { url: 'api/v1/admins/logout', method: 'post', propertyName: 'message' },
          user: { url: '/api/v1/admins', method: 'get', propertyName: 'owner' }
        },
      },
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
