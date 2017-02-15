import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loginUser } from '../actions/index'

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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='email' ref='email'/>
          <br/>
          <input type='password' placeholder='password' ref='password'/>
          <br/>
          <button className='button-primary' type='submit'>Login</button>
        </form>

        <Link to='/signup'>Sign Up</Link>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({loginUser}, dispatch)
}

export default connect( null, mapDispatchToProps)(Login)
