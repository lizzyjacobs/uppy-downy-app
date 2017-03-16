import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createUser } from '../actions/index'

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
          <input ref="name" placeholder="Enter Name" className="textInputStyle"/>
          <input ref="email" placeholder="Enter Email" className="textInputStyle2"/>
          <input type="password" ref="userPassword" placeholder="Enter Password" className="textInputStyle"/>
          <input type="password" ref="passwordConfirmation" placeholder="Verify Password" className="textInputStyle2"/>
          <div className="buttonContainerStyle">
            <button type="submit" className="buttonInputStyle">Submit</button>
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
