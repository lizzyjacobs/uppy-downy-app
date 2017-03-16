import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createPoll } from '../actions/index'
import { connect } from 'react-redux'

import CreatePollOption from './createPollOption'


class CreatePoll extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    if (this.refs.title.value !== "" &&
        this.refs.optionA.refs.text.value !== "" &&
        this.refs.optionA.refs.image.value !== "" &&
        this.refs.optionB.refs.text.value !== "" &&
        this.refs.optionB.refs.image.value !== "" &&
        this.props.user.id !== ""){
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
    else {alert('Please Fill All Inputs')}
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit} className="create-poll">
        <h3>Ready to create a poll?</h3>
        <input ref='title' placeholder='Poll Title' className="text-input text-input--1"/>
        <CreatePollOption ref='optionA' option="A" />
        <CreatePollOption ref='optionB' option="B"/>
        <div className="button-container">
          <input type='submit' className="button-container__input"/>
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
