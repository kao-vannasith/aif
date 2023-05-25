import { createApp } from 'vue'
import App from './App.vue'

import '@mdi/font/css/materialdesignicons.css'
//import Vuetify from 'vuetify'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'
import axios from 'axios'

const axiosInstance = axios.create({
  withCredentials: true,
})

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app.config.globalProperties.$axios = { ...axiosInstance }
app.use(router)
app.use(vuetify)
app.use(router)
// app.use(Vuetify, {
//     iconfont:  'md' || 'mdi'

//   })
  app.mount('#app')
