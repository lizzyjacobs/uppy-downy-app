import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loginUser } from '../actions/index'
import { textInputStyle, textInputStyle2, buttonContainerStyle, buttonInputStyle } from '../stylesheet'


class Login extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()

    const user = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }

    this.props.loginUser(user)
  }

  redirectToSignUp(){
    browserHistory.push('/signup')
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='email' ref='email' style={textInputStyle}/>
          <input type='password' placeholder='password' ref='password' style={textInputStyle2}/>
          <div style={buttonContainerStyle}>
            <button type='submit' style={buttonInputStyle}>Login</button>
          </div>
        </form>
        <div style={buttonContainerStyle}>
          <button to='/signup' onClick={this.redirectToSignUp} style={buttonInputStyle}>Sign Up</button>
        </div>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({loginUser}, dispatch)
}

export default connect( null, mapDispatchToProps)(Login)
