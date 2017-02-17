import React, { Component } from 'react'
import { connect } from 'react-redux'
import Vote from './vote'

class PollOption extends Component {

  render(){
    
  }

}

function mapStateToProps(state) {

  const poll = state.polls.find( poll => poll.id === state.poll ) || {}
  return {
    poll: poll,
    user: state.user
  }

}

export default connect(mapStateToProps)(PollOption)
