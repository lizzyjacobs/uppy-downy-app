import React, { Component } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './App.css';
import NavBar from './components/navbar'
import { fetchUser } from './actions'

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        { this.props.children }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.user}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
