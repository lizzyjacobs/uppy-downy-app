import React, { Component } from 'react'
import { connect } from 'react-redux'
import Vote from './vote'

class Poll extends Component {

  render(){
    var pollOptions = this.props.poll.poll_options.map(
      (option,i) => <div key={i}> <p>{option.body}</p> <Vote optionId={option.id}/>  </div>)
    return(
      <div>
        <h2>{this.props.poll.title}</h2>
        {pollOptions}
      </div>
    )
  }

}

function mapStateToProps(state) {

  const poll = state.polls.find( poll => poll.id === state.poll ) || {}
  debugger
  return {
    poll: poll
  }
}

export default connect( mapStateToProps )( Poll )
