import Vue from 'vue'
import VueRouter from 'vue-router'
import Map from '../views/Confirmmap.vue'
import Existingmap from "../views/Existingmap";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Map',
    component: Map,
    meta: {}
  },
  {
    path: '/existing',
    name: 'Existingmap',
    component: Existingmap ,
    meta: {}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
