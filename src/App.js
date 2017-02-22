import React, { Component } from 'react';

import './App.css';
import NavBar from './components/navbar'

export default class App extends Component {

  render() {
    return (
      <div className="App" style={{marginBottom:100}}>
        <NavBar />
        { this.props.children }
      </div>
    )
  }
}
