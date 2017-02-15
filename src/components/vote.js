import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createVote } from '../actions'

class Vote extends Component {
  constructor(props){
    super(props)

  }


  handleVote(event){
    event.preventDefault()
    createVote(this.props.optionId)
  }

  render(){
    return(
      <form onSubmit={this.handleVote.bind(this)} >
        <input type='submit' text='Cast Vote'/>
      </form>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({createVote}, dispatch)
}

export default connect(null, mapDispatchToProps)(Vote)
