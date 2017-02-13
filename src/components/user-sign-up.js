import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createUser } from '../actions/index'
import { connect } from 'react-redux'

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
          <input ref="name" placeholder="Enter Name"/>
          <input ref="email" placeholder="Enter Email"/>
          <input type="password" ref="userPassword" placeholder="Enter Password"/>
          <input type="password" ref="passwordConfirmation" placeholder="Verify Password"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(UserSignUp)
