import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPolls, showCurrentPoll } from '../actions'


class UserPolls extends Component {
  componentDidMount(){
    this.props.fetchPolls()
  }

  handleClick(pollId){
    this.props.showCurrentPoll(pollId)
  }
// {poll.poll_options.map(option => option.votes.length)}
  showYourPolls(){
    let yours = this.props.yourPolls.map((poll) => {
      return(
        <li onClick={this.handleClick.bind(this, poll.id)}>
        {poll.title}
        </li>
      )
    })
    return yours
  }

  render(){
    return(
        <ul>{this.showYourPolls()}</ul>
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


function mapStateToProps(state){
  const yourPolls = state.polls.filter( poll => poll.user_id === state.user.id)

  return{
    yourPolls: yourPolls
  }

}

export default connect( mapStateToProps, mapDispatchToProps )(UserPolls)
