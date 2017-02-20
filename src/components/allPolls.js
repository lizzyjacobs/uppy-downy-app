import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPolls, showCurrentPoll } from '../actions'



class AllPolls extends Component {

  componentDidMount(){
    this.props.fetchPolls()
  }

  handleClick(pollId){
    this.props.showCurrentPoll(pollId)
  }

  render(){
    const polls = this.props.polls.map((poll, i)=>{
      return (<li onClick={this.handleClick.bind(this, poll.id)} key={i}>{poll.title}</li>)
    })

    return (
      <div>
        <ul>{polls}</ul>
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
