import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import router from './router'
Vue.config.productionTip = false
import VueRouter from 'vue-router'
Vue.use(VueRouter)

new Vue({
  vuetify,
  vueRouter: router,
  router,
  render: h => h(App)
}).$mount('#app')
