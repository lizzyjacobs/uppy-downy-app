import axios from 'axios'
import { browserHistory } from 'react-router'

const URL = 'http://uppy-api-pee.herokuapp.com/api/v1/'

axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export default {

  createUser: function(user){
    return axios.post(URL + 'signup', user).then((userData) => {
      sessionStorage.setItem('jwt', userData.data.jwt)
      browserHistory.push("/dashboard")
      return userData
    })
  },

  createPoll: function(poll){
    return axios.post(URL + 'polls', {poll: poll}).then( response => response.data )
    browserHistory.push(`/polls`)
  },

  fetchPolls: function(){
    return axios.get(URL + 'polls').then( response => response.data )
  },

  loginUser: function(user){
    axios.post(URL + 'login', user).then((response) => {
      sessionStorage.setItem('jwt', response.data.jwt)
      browserHistory.push('/dashboard')
      return response
    })
  },

  fetchUser: function(){
    return axios.get(URL + 'users').then( (response) => response )
  },

  createVote: function(optionId){
    let vote={vote: {optionId: optionId}}
    return axios.patch(URL + 'polls', vote).then((response) => response.data)

  }



}
