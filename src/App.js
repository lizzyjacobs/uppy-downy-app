import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserSignUp from './components/user-sign-up'
import UserDashboard from './components/user-dashboard'
import NavBar from './components/navbar'

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

export default App;
