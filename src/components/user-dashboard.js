import React, { Component } from 'react'

import CreatePoll from './create-poll'

export default class UserDashboard extends Component {

  render(){
    return(
      <div>
        Welcome back! Ready to create a poll?
        < CreatePoll />
      </div>
    )
  }
}
