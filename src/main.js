import nVue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'



import router from './router' //引入路由配置
import store from './store' //引入 Vuex 状态管理
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el:'@app',
  render: h => h(App),
  router, //使用路由配置
  store //使用 Vuex 进行状态管理
})
