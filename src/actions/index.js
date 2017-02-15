import axios from 'axios'
import { browserHistory } from 'react-router'

const URL = 'http://localhost:3000/api/v1/'

export const createUser = (user) => {
  const response = axios.post(URL + 'signup', user).then((userData) => {
    sessionStorage.setItem('jwt', userData.data.jwt)
    browserHistory.push("/dashboard")
    return userData
  })

  return {
    type: "CREATE_USER",
    payload: response
  }
}

export function createPoll(poll) {
  const newPoll = axios.post(URL + 'polls', {poll: poll}).then( response => response.data )
  browserHistory.push(`/polls`)

  return {
    type: 'CREATE_POLL',
    payload: newPoll
  }
}

export function fetchPolls(){
  const polls = axios.get(URL + 'polls').then( response => response.data )

  return {
    type: 'FETCH_POLLS',
    payload: polls
  }
}

export function showCurrentPoll(pollId){
  browserHistory.push(`/polls/${pollId}`)
  return {
    type: 'SHOW_CURRENT_POLL',
    payload: pollId
  }

}

export const loginUser = (user) => {
  const response = axios.post(URL + 'login', user).then((response) => {
    sessionStorage.setItem('jwt', response.data.jwt)
    browserHistory.push("/dashboard")

    return response
  })

  return {
    type: 'LOGIN_USER',
    payload: response
  }
}

export function createVote(optionId){
  let vote={vote: {userId: 1, optionId: optionId}}
  const response = axios.post(URL + 'votes', vote).then((response) => {
    browserHistory.push("/polls")

    return response
  })
  return {
    type: "CREATE_VOTE",
    payload: response
  }
}
