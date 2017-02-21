import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Flexbox from 'flexbox-react'

import Vote from './vote'
import { showCurrentPoll } from '../actions'
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

  countVotesPercent(option){
    return Math.round(this.props.poll.votes.filter( vote => vote.poll_option_id === this.props.poll.poll_options[option].id).length/this.props.poll.votes.length * 10000)/100
  }
  countVotes(option){
    let length = this.props.poll.votes.filter( vote => vote.poll_option_id === this.props.poll.poll_options[option].id).length
    if (length===1){
      return `${length} Vote`
    }else {
      return `${length} Votes`
    }
  }

  chooseDisplay(){
    if (this.props.poll.votes.find( vote => vote.user_id === this.props.user.id)) {
      return this.props.poll.poll_options.map( (option, i) =>
        <div key={i} style={pollOptionContainerStyle}>
          <img src={option.image} alt="" style={pollOptionImageStyle}/>
          <h3>{option.text}: {this.countVotesPercent(i)}% with {this.countVotes(i)}</h3>
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
      <div style={{marginBottom: 40}}>
        <h2>{this.props.poll.title}</h2>
        <Flexbox justifyContent='center' alignItems='center' style={{marginBottom:40}}>
          {this.chooseDisplay()}
        </Flexbox>
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
