import Vue from 'vue'
import VueRouter from 'vue-router'
import Vote from '../views/Vote.vue'
import Auth from '../views/Auth.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/',
    name: 'Vote',
    component: Vote
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
