// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Axios from 'axios'
Axios.defaults.baseURL = 'http://192.168.1.213:3000/'
//localize plugin vue-i18n
import VueI18n from 'vue-i18n'
import messages from './i18n.js'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh',
  messages
})
Vue.prototype.$http = Axios
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
  i18n,
  // data:{
  //   Bus : new Vue()
  // }
})