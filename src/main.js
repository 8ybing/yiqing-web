import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

//vant tabbar
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
//echarts
import * as echarts from "echarts"
Vue.prototype.$echarts = echarts

//jsonp
import * as VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
