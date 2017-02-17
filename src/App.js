import React, { Component } from 'react';

import './App.css';
import NavBar from './components/navbar'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        { this.props.children }
      </div>
    )
  }
}
