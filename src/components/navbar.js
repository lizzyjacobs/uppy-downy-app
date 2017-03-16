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
        <div className="nav__links">
          <Link to='/polls' className="nav__links__link"><span className="underline">Polls</span></Link>
          <Link to='/my-dashboard' className="nav__links__link"><span className="underline">Dashboard</span></Link>
          <Link to='/login' onClick={this.handleLogout.bind(this)} className="nav__links__link"><span className="underline">Logout</span></Link>
        </div>
      )
    } else {
      return (
        <div className="nav__links">
          <Link to='/login' className="nav__links__link">Login/Sign Up</Link>
        </div>
      )
    }
  }

  render(){
    return (
      <nav className="nav">
        <Link to="/polls" className="nav__logo">This/That</Link>
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
