import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import router from '../router'

const authStore = {
  state: {
    isAuthenticated: false,
    user: {},
    token: null
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      }
      if (localStorage.getItem('user')) {
        state.user = JSON.parse(localStorage.getItem('user'))
      }
    },
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    },
    setUser(state, user) {
      state.user = user
    },
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
    googleSignIn({ commit }) {
      const provider = new GoogleAuthProvider()
      const auth = getAuth()
      signInWithPopup(auth, provider)
        .then(result => {
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential.accessToken
          const user = result.user
          commit('setAuthenticated', true)
          commit('setUser', user)
          commit('setToken', token)
          localStorage.setItem('token', token)
          localStorage.setItem('user', JSON.stringify(user))
          router.push({ name: 'Vote' })
        })
        .catch(error => {
          console.log(error)
        })
    },
    googleSignOut({ commit }) {
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          commit('setAuthenticated', false)
          commit('setUser', {})
          commit('setToken', null)
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          router.push({ name: 'Auth' })
        })
        .catch(error => {
          console.log(error)
        })
    },
    vote({ commit }, payload) {
      console.log(payload)
    }
  }
}

export default authStore
