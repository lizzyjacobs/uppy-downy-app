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
} from '../stylesheets/stylesheet'


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
        <Flexbox className="linksContainerStyle">
          <Link to='/polls' className="linkStyle">Polls</Link>
          <Link to='/my-dashboard' className="linkStyle">Dashboard</Link>
          <Link to='/login' onClick={this.handleLogout.bind(this)} className="linkStyle">Logout</Link>
        </Flexbox>
      )
    } else {
      return (
        <Flexbox className="linksContainerStyle">
          <Link to='/login' className="linkStyle">Login/Sign Up</Link>
        </Flexbox>
      )
    }
  }

  render(){
    return (
      <Flexbox element='nav' className="navbarStyle">
        <Link to="/polls" className="logoStyle">This/That</Link>
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
