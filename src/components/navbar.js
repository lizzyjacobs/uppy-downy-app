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

  showLinks(){
    if (this.props.user.name){
      return (
        <div className="linksContainerStyle">
          <Link to='/polls' className="linkStyle">Polls</Link>
          <Link to='/my-dashboard' className="linkStyle">Dashboard</Link>
          <Link to='/login' onClick={this.handleLogout.bind(this)} className="linkStyle">Logout</Link>
        </div>
      )
    } else {
      return (
        <div className="linksContainerStyle">
          <Link to='/login' className="linkStyle">Login/Sign Up</Link>
        </div>
      )
    }
  }

  render(){
    return (
      <nav className="navbarStyle">
        <Link to="/polls" className="logoStyle">This/That</Link>
        {this.showLinks()}
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
