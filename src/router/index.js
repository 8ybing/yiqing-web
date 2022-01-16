import Vue from 'vue'
import VueRouter from 'vue-router'
import Map from '../views/map.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/map',
    name: 'Map',
    component: Map,
    meta: {}
  },
  {
    path: '/epidemicData',
    name: 'EpidemicData',
    component: () => import('../views/EpidemicData'),
    meta: {title: '疫情数据'}
  },
  {
    path: '/dynamic',
    name: 'Dynamic',
    component: () => import('../views/Dynamic'),
    meta: {title: '实时动态'}
  },
  {
    path: '/guide',
    name: 'Guide',
    component: () => import('../views/Guide'),
    meta: {title: '防疫指南'}
  },
  {
    path: '/rumor',
    name: 'Rumor',
    component: () => import('../views/Rumor'),
    meta: {title: '官方辟谣'}
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
