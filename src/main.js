import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.component('alert-message', require('@/components/AlertMessage').default)
Vue.component('banner', require('@/components/Banner').default)
Vue.component('page-title', require('@/components/PageTitle').default)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
