import Vue from 'vue'
import Vuex from 'vuex'
import authStore from './auth'
import { vote, getVote } from '../services/vote'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    votedTeamId: null
  },
  mutations: {
    setVotedTeamId(state, votedTeamId) {
      state.votedTeamId = votedTeamId
    },
    resetVotedTeamId(state) {
      state.votedTeamId = null
    }
  },
  actions: {
    vote({ commit }, payload) {
      const teamId = payload
      const userGgId = authStore.state.user.uid
      vote(userGgId, teamId)
        .then(() => {
          commit('setVotedTeamId', teamId)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getVote({ commit }) {
      const userGgId = authStore.state.user.uid
      getVote(userGgId)
        .then(votedTeamId => {
          commit('setVotedTeamId', votedTeamId)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {
    authStore
  }
})
