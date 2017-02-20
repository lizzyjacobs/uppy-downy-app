import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { fetchUser, logoutUser } from '../actions'

class NavBar extends Component {

  componentWillMount(){
    if (window.sessionStorage.getItem) {
      this.props.fetchUser()
    }
  }

  handleLogout(){
    this.props.logoutUser()
  }

  showAccountLink(){
    if (this.props.user.name){
      return (
        <div className='nav_links'>
          < Link to='/polls'>Polls</Link>
          < Link to='/create-poll'>Create a Poll!</Link>
          < Link to='/my-dashboard'> My Polls </Link>
          < Link onClick={this.handleLogout.bind(this)}>Logout</Link>
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
  return bindActionCreators({fetchUser, logoutUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
