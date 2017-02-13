import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createPoll } from '../actions/index'
import { connect } from 'react-redux'

class CreatePoll extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    const poll = {title: this.refs.title.value, optionA: this.refs.optionA.value, optionB: this.refs.optionB.value}
    this.props.createPoll(poll)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          Poll Title: <input type='text' ref='title'/>
          Option A: <input type='text' ref='optionA' />
          Option B: <input type='text' ref='optionB' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createPoll}, dispatch)
}

export default connect(null, mapDispatchToProps)(CreatePoll)
