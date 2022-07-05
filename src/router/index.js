import Vue from 'vue'
import VueRouter from 'vue-router'
import Vote from '../views/Vote.vue'
import Auth from '../views/Auth.vue'
import unAuth from '../middleware/unAuth'
import auth from '../middleware/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signin',
    name: 'Auth',
    component: Auth,
    meta: {
      middleware: { unAuth }
    }
  },
  {
    path: '/team/:teamId',
    name: 'Team',
    component: Vote,
    meta: {
      middleware: { auth }
    }
  },
  {
    path: '/',
    name: 'Vote',
    component: Vote,
    meta: {
      middleware: { auth }
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.meta?.middleware?.unAuth) {
    to.meta.middleware.unAuth({ next, router })
  } else {
    next()
  }

  if (to.meta?.middleware?.auth) {
    to.meta.middleware.auth({ next, router })
  } else {
    next()
  }
})

export default router
