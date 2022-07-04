import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup
} from 'firebase/auth'
import router from '../router'

const authStore = {
  state: {
    isAuthenticated: false,
    user: {},
    token: null
  },
  mutations: {
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
          router.push('/')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}

export default authStore
