import { write, read } from './firebase'

function vote(userGgId, teamId) {
  return write(`/votes/${userGgId}`, {
    teamId
  })
}

function getVote(userGgId) {
  return read(`/votes/${userGgId}`, 'teamId')
}

export { vote, getVote }
