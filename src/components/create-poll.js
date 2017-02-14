import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createPoll } from '../actions/index'
import { connect } from 'react-redux'
import CreatePollOption from './create-poll-option'

class CreatePoll extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    //debugger
    const poll = {title: this.refs.title.value, optionA: this.refs.optionA.refs.text.value, optionB: this.refs.optionB.refs.text.value }
    this.props.createPoll(poll)
    // this.props.createOption(poll_optionA)
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          Poll Title: <input type='text' ref='title'/>
          OptionA: <CreatePollOption ref='optionA'/>
          OptionB: <CreatePollOption ref='optionB'/>
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
