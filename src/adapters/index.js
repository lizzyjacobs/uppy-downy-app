import axios from 'axios'
import { browserHistory } from 'react-router'

const URL = 'https://uppy-api-pee.herokuapp.com/api/v1/'

axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export default {

  createUser: function(user){
    return axios.post(URL + 'signup', user).then((userData) => {
      axios.defaults.headers.common['AUTHORIZATION'] = response.data.jwt
      sessionStorage.setItem('jwt', userData.data.jwt)
      browserHistory.push("/polls")
      return userData
    })
  },

  createPoll: function(poll){
    return axios.post(URL + 'polls', {poll: poll}).then( response => {
      browserHistory.push("/polls")
      return response.data
    })

  },

  fetchPolls: function(){
    return axios.get(URL + 'polls').then( response => response.data )
  },

  loginUser: function(user){
    return axios.post(URL + 'login', user).then((response) => {
      axios.defaults.headers.common['AUTHORIZATION'] = response.data.jwt
      sessionStorage.setItem('jwt', response.data.jwt)
      browserHistory.push('/polls')
      return response
    })
  },

  fetchUser: function(){
    return axios.get(URL + 'users').then( (response) => response )
  },

  createVote: function(optionId){
    let vote={vote: {optionId: optionId}}
    return axios.patch(URL + 'polls', vote).then((response) => response.data)

  },


}
