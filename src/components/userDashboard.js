import React, { Component } from 'react'
import UserPolls from './userPolls'
import CreatePoll from './createPoll'


export default class UserDashboard extends Component {
  render(){
    return(
      <div>
        < UserPolls />
        < CreatePoll />
      </div>
    )
  }
}
