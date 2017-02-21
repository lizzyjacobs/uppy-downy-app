import React, { Component } from 'react'
import { connect } from 'react-redux'
import Vote from './vote'
import { showCurrentPoll } from '../actions'
import { bindActionCreators } from 'redux'
import {
  pollOptionContainerStyle,
  pollOptionImageStyle,
  buttonContainerStyle,
  buttonInputStyle
} from '../stylesheet'


class Poll extends Component {

  handleNextClick(){
    let newPollId = (this.props.poll.id)%(this.props.polls.length) + 1
    this.props.showCurrentPoll(newPollId)
  }

  countVotes(option){
    return this.props.poll.votes.filter( vote => vote.poll_option_id === this.props.poll.poll_options[option].id).length
  }

  chooseDisplay(){
    if (this.props.poll.votes.find( vote => vote.user_id === this.props.user.id) || this.props.poll.user_id === this.props.user.id) {
      return this.props.poll.poll_options.map( (option, i) =>
        <div key={i} style={pollOptionContainerStyle}>
          <img src={option.image} alt="" style={pollOptionImageStyle}/>
          <h3>{option.text}: {this.countVotes(i)} votes</h3>
        </div>
      )
    } else {
      return this.props.poll.poll_options.map( (option,i) =>
        <div key={i} style={pollOptionContainerStyle}>
          <p>{option.text}</p>
          <img src={option.image} alt="" style={pollOptionImageStyle}/>
          <Vote optionId={option.id}/>
        </div>
      )
    }
  }

  render(){
    return(
      <div style={{marginBottom: 10}}>
        <h2>{this.props.poll.title}</h2>
        {this.chooseDisplay()}
        <div style={buttonContainerStyle}>
          <button onClick={this.handleNextClick.bind(this)} style={buttonInputStyle}>Next poll!</button>
        </div>
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
