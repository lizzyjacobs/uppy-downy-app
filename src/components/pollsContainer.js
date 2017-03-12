import React, { Component } from 'react'
import { connect } from 'react-redux'
import Flexbox from 'flexbox-react'

import { fetchPolls, showCurrentPoll } from '../actions'
import PollsPoll from './pollsPoll'


class PollsContainer extends Component {

  componentDidMount(){
    this.props.fetchPolls()
  }

  render(){
    const polls = this.props.polls.reverse().map((poll, i)=>{
      return (
        <PollsPoll poll={poll} i={i} handleClick={this.props.showCurrentPoll} />
      )
    })

    return (
      <div>
        <ul className="pollsList">
          <Flexbox flexWrap='wrap' alignContent='space-between' justifyContent='space-around'>
            {polls}
          </Flexbox>
        </ul>
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
export default connect( mapStateToProps, mapDispatchToProps )( PollsContainer )
