import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CreatePoll from './create-poll'

export default class UserDashboard extends Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        Welcome back! Ready to create a poll?
        < CreatePoll />
      </div>
    )
  }
}
