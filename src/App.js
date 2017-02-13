import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserSignUp from './components/user-sign-up'
import UserDashboard from './components/user-dashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
      { this.props.children }
      </div>
    );
  }
}

export default App;
