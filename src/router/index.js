import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'
import Vote from '../views/Vote.vue'
import Result from '../views/Result.vue'
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
    path: '/k3t-qu4-bjnk-ck0n-d0j-tkj-unjk4ck-qdsc-dut',
    name: 'Result',
    component: Result
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
