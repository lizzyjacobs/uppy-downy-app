import React, { Component } from 'react'
import { connect } from 'react-redux'
import Vote from './vote'
import { showCurrentPoll } from '../actions'


class Poll extends Component {

handleNextClick(){

}

countVotes(option){
  return this.props.poll.votes.filter( vote => vote.poll_option_id === this.props.poll.poll_options[option].id).length
}

chooseDisplay(){
  if (this.props.poll.votes.find( vote => vote.user_id === this.props.user.id)) {
    return <div>
            <h2>{this.props.poll.poll_options[0].body}: {this.countVotes(0)}</h2>
            <h2>{this.props.poll.poll_options[1].body}: {this.countVotes(1)}</h2>
          </div>
  } else {
    var pollOptions = this.props.poll.poll_options.map(
      (option,i) => <div key={i}> <p>{option.body}</p> <Vote optionId={option.id}/>  </div>)
    return pollOptions
  }
}

  render(){
    return(
      <div>
        <h2>{this.props.poll.title}</h2>
        {this.chooseDisplay()}
        <button onClick={this.handleNextClick.bind(this)}>Try the next poll!</button>
      </div>
    )
  }

}

function mapStateToProps(state) {

  const poll = state.polls.find( poll => poll.id === state.poll ) || {}
  return {
    poll: poll,
    user: state.user
  }
}

export default connect( mapStateToProps )( Poll )
