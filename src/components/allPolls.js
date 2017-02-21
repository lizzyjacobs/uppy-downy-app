import React, { Component } from 'react'
import { connect } from 'react-redux'
import Flexbox from 'flexbox-react'

import { fetchPolls, showCurrentPoll } from '../actions'
import { feedPollOptionImageStyle, feedPollStyle, feedImageCropStyle } from '../stylesheet'


class AllPolls extends Component {

  componentDidMount(){
    this.props.fetchPolls()
  }

  handleClick(pollId){
    this.props.showCurrentPoll(pollId)
  }

  displayPollOptions(poll){
    const pollOptions = poll.poll_options.map( (option,i) =>
        <img key={i} src={option.image} alt="" style={feedPollOptionImageStyle}/>
    )
    return pollOptions
  }

  render(){
    const polls = this.props.polls.map((poll, i)=>{
      return (
        <li onClick={this.handleClick.bind(this, poll.id)} key={i} style={feedPollStyle}>
          <h3>{poll.title}</h3>
          <Flexbox justifyContent='space-around' alignContent='center'>
            {this.displayPollOptions(poll)}
          </Flexbox>
        </li>
      )
    })

    return (
      <div>
        <Flexbox element='ul' flexWrap='wrap' alignContent='space-between' justifyContent='space-around'>
          {polls}
        </Flexbox>
        { this.props.children }
      </div>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return {
    fetchPolls: function(){
      let action = fetchPolls()
      dispatch( action )
    },
    showCurrentPoll: function(pollId){
      let action = showCurrentPoll(pollId)
      dispatch ( action )
    }
  }
}

function mapStateToProps(state) {
  return {
    polls: state.polls
  }
}
export default connect( mapStateToProps, mapDispatchToProps )( AllPolls )
