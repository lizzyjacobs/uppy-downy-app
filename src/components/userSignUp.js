import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createUser } from '../actions/index'
import { textInputStyle, textInputStyle2, buttonContainerStyle, buttonInputStyle } from '../stylesheet'

class UserSignUp extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    const user = {name: this.refs.name.value, email: this.refs.email.value, password: this.refs.userPassword.value, password_confirmation: this.refs.passwordConfirmation.value}
    this.props.createUser(user)
  }

  render(){
    return (
      <div>
        <h2>Sign Up!</h2>
        <form onSubmit={this.handleSubmit}>
          <input ref="name" placeholder="Enter Name" style={textInputStyle}/>
          <input ref="email" placeholder="Enter Email" style={textInputStyle2}/>
          <input type="password" ref="userPassword" placeholder="Enter Password" style={textInputStyle}/>
          <input type="password" ref="passwordConfirmation" placeholder="Verify Password" style={textInputStyle2}/>
          <div style={buttonContainerStyle}>
            <button type="submit" style={buttonInputStyle}>Submit</button>
          </div>
        </form>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(UserSignUp)
