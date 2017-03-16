import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { createVote } from '../actions'

class Vote extends Component {

  handleVote(event){
    event.preventDefault()
    if (this.props.user.id){
      this.props.createVote(this.props.optionId)
    }else{
      browserHistory.push('/login')
    }
  }

  render(){
    return(
      <form onSubmit={this.handleVote.bind(this)} className="buttonContainerStyle">
        <input type='submit' value='Cast Vote' className="buttonInputStyle"/>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    poll: state.poll,
    votes: state.votes,
    user: state.user
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({createVote}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Vote)
