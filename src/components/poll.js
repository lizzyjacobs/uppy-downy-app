import React, { Component } from 'react'
import { connect } from 'react-redux'
import Vote from './vote'
import { showCurrentPoll } from '../actions'
import { bindActionCreators } from 'redux'


class Poll extends Component {

handleNextClick(){
  let newPollId = (this.props.poll.id)%(this.props.polls.length) + 1
  this.props.showCurrentPoll(newPollId)
}

countVotes(option){
  return this.props.poll.votes.filter( vote => vote.poll_option_id === this.props.poll.poll_options[option].id).length
}

chooseDisplay(){
  if (this.props.poll.votes.find( vote => vote.user_id === this.props.user.id)) {
      var allOptions = this.props.poll.poll_options.map(
        (option, i) => <div key={i}> <img src={option.image} alt=""/> <h3>{option.text}: {this.countVotes(i)} votes</h3> </div>)
    return allOptions
  } else {
    var pollOptions = this.props.poll.poll_options.map(
      (option,i) => <div key={i}> <p>{option.text}</p> <img src={option.image} alt=""/> <Vote optionId={option.id}/>  </div>)
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
    user: state.user,
    polls: state.polls
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({showCurrentPoll}, dispatch)
}

export default connect( mapStateToProps, mapDispatchToProps )( Poll )
