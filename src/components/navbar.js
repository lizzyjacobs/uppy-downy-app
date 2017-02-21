import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Flexbox from 'flexbox-react'

import { fetchUser, logoutUser } from '../actions'
import {
  linksContainerStyle,
  linkStyle,
  navbarStyle,
  logoStyle
} from '../stylesheet'


class NavBar extends Component {

  componentWillMount(){
    if (window.sessionStorage.getItem) {
      this.props.fetchUser()
    }
  }

  handleLogout(){
    this.props.logoutUser()
  }

  showLinks(){
    if (this.props.user.name){
      return (
        <Flexbox justifyContent='space-between' alignSelf='flex-end' minWidth='50%' style={linksContainerStyle}>
          <Link to='/polls' style={linkStyle}>Polls</Link>
          <Link to='/my-dashboard' style={linkStyle}>My Dashboard</Link>
          <Link onClick={this.handleLogout.bind(this)} style={linkStyle}>Logout</Link>
        </Flexbox>
      )
    } else {
      return (
        < Link to='/login' style={linkStyle}>Login/Sign Up</Link>
      )
    }
  }

  render(){
    return (
      <Flexbox element='nav' justifyContent='space-between' alignItems='baseline' style={navbarStyle}>
        <Link to="/polls" style={logoStyle}>Votey</Link>
        {this.showLinks()}
      </Flexbox>
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
