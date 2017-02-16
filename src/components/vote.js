import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createVote } from '../actions'

class Vote extends Component {

  handleVote(event){
    event.preventDefault()
    createVote(this.props.optionId)
  }

  render(){

    return(
      <form onSubmit={this.handleVote.bind(this)} >
        <input type='submit' value='Cast Vote'/>
      </form>
    )
  }

}

function mapStateToProps(state) {
  return {
    poll: state.poll,
    votes: state.votes
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({createVote}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Vote)
