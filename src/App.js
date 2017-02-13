import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserSignUp from './components/user-sign-up'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Sign up!</h2>
        </div>
        <p className="App-intro">
          < UserSignUp /> 
        </p>

      </div>
    );
  }
}

export default App;
