import { write, read, readAll } from './firebase'

function vote(userGgId, teamId) {
  return write(`/votes/${userGgId}`, {
    teamId
  })
}

function getVote(userGgId) {
  return read(`/votes/${userGgId}`, 'teamId')
}

function getResult() {
  return readAll('/votes').then(votes => {
    const result = {}
    Object.keys(votes).forEach(userGgId => {
      const teamId = votes[userGgId].teamId
      if (result[teamId]) {
        result[teamId]++
      } else {
        result[teamId] = 1
      }
    })
    return Object.keys(result).map(teamId => ({
      teamId,
      count: result[teamId]
    })).sort((a, b) => b.count - a.count)
  })
}

export { vote, getVote, getResult }
