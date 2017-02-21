import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createPoll } from '../actions/index'
import { connect } from 'react-redux'

import CreatePollOption from './createPollOption'
import {
  textInputStyle,
  optionTitleStyle,
  buttonContainerStyle,
  buttonInputStyle
} from '../stylesheet'


class CreatePoll extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    const poll = {
      title: this.refs.title.value,
      optionAtext: this.refs.optionA.refs.text.value,
      optionAimage: this.refs.optionA.refs.image.value,
      optionBtext: this.refs.optionB.refs.text.value,
      optionBimage: this.refs.optionB.refs.image.value,
      user_id: this.props.user.id
    }
    this.props.createPoll(poll)
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit} style={{display:'inline-block',width:'60%'}}>
        <h3>Ready to create a poll?</h3>
        <input ref='title' placeholder='Poll Title' style={textInputStyle}/>
        <p style={optionTitleStyle}>Option A:</p>
        <CreatePollOption ref='optionA'/>
        <p style={optionTitleStyle}>Option B:</p>
        <CreatePollOption ref='optionB'/>
        <div style={buttonContainerStyle}>
          <input type='submit' style={buttonInputStyle}/>
        </div>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createPoll}, dispatch)
}

function mapStateToProps(state) {
  return {
    polls: state.polls,
    user: state.user
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(CreatePoll)
