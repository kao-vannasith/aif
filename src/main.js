import { createApp } from 'vue'
import App from './App.vue'

import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
})
// createApp(Vuetify, {
//     iconfont:  'md' || 'mdi'

//   }).

createApp(App).use(router).use(vuetify).use(router).use(Vuetify, {
    iconfont:  'md' || 'mdi'

  }).mount('#app')
