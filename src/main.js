import Vue from 'vue'
import axios from 'axios'
//import login from './login.vue'
import app from './App.vue'
//import register from './register.vue'
//import VueRouter from 'vue-router'
//import Main from './main.vue'
//import router from'./router.js'

Vue.config.productionTip = false
Vue.prototype.bus=new Vue  

new Vue({
  render: h => h(app),
}).$mount('#app') 
 
Vue.prototype.$axios = axios 


