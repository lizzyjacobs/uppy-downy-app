import adapter from '../adapters'
import { browserHistory } from 'react-router'

export const createUser = (user) => {
  const response = adapter.createUser(user)
  return {
    type: "CREATE_USER",
    payload: response
  }
}

export function createPoll(poll) {
  const newPoll = adapter.createPoll(poll)

  return {
    type: 'CREATE_POLL',
    payload: newPoll
  }
}

export function fetchPolls(){
  const polls = adapter.fetchPolls()
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
  const response = adapter.loginUser(user)
  return {
    type: 'LOGIN_USER',
    payload: response
  }
}

export const logoutUser = () => {
  sessionStorage.removeItem('jwt')
  browserHistory.push("/login")
  return {
    type: 'LOGOUT_USER',
    payload: {}
  }
}

export const fetchUser = () => {
  const response = adapter.fetchUser()
  return {
    type: 'FETCH_USER',
    payload: response
  }
}

export function createVote(optionId){
  const poll = adapter.createVote(optionId)
  return {
    type: 'CREATE_VOTE',
    payload: poll
  }
}
