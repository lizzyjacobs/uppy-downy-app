import React, { Component } from 'react'

import { Link, browserHistory } from 'react-router'

export default class NavBar extends Component {


  handleLogout(){
    debugger
    sessionStorage.setItem('jwt', "")
    browserHistory.push("/login")
  }

  render(){
    return (
      <nav className='navbar navbar-inverse'>
        <div className='navbar-header'>
          <Link className='navbar-brand' to="/">Uppy Downy Votey App</Link>
        </div>
        < Link to='/polls'>Polls</Link>
        < Link to='/login'>Login</Link>
        < Link onClick={this.handleLogout}>Logout</Link>
      </nav>
    )
  }

}
