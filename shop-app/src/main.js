import Vue from 'vue'
import App from './App.vue'
//引入配置路由
import router from '@/router'
Vue.config.productionTip = false

let a = 20

new Vue({
  render: h => h(App),
  //注册路由
  router
}).$mount('#app')
