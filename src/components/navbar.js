import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'

import { fetchUser } from '../actions'

class NavBar extends Component {

  componentWillMount(){
    if (window.sessionStorage.getItem) {
      this.props.fetchUser()
    }
  }

  handleLogout(){
    sessionStorage.setItem('jwt', "")
    browserHistory.push("/login")
  }

  showAccountLink(){
    if (this.props.user.name){
      return (
        <div className='nav_links'>
          < Link to='/polls'>Polls</Link>
          < Link to='/dashboard'>{this.props.user.name}</Link>
          < Link onClick={this.handleLogout}>Logout</Link>
        </div>
      )
    } else {
      return (
        < Link to='/login'>Login/Sign Up</Link>
      )
    }

  }

  render(){
    return (
      <nav className='navbar navbar-inverse'>
        <div className='navbar-header'>
          <Link className='navbar-brand' to="/polls">Uppy Downy Votey App</Link>
        </div>
        {this.showAccountLink()}
      </nav>
    )
  }

}

function mapStateToProps(state) {
  return {user: state.user}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
