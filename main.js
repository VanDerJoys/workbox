import Vue from 'vue'
import App from './App.vue'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/css/material-icons.css'
import 'materialize-css/dist/js/materialize.min.js'
import VueRouter from 'vue-router'
import Routes from './Routes'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes : Routes,
  mode : 'history'
})

new Vue({
  render: h => h(App),
  router : router
}).$mount('#app')
