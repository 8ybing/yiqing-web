import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

//echarts
import * as echarts from "echarts"
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
