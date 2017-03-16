import React, { Component } from 'react'


export default class CreatePollOption extends Component {

  render(){
    return(
      <div>
        <p className="optionTitleStyle">Option {this.props.option}:</p>
        <input type='text' ref='text' placeholder='Text' className="text-input text-input--1" size='40'/>
        <input type='text' ref='image' placeholder='Image URL' className="text-input text-input--1" size='40'/>
      </div>
    )
  }
}
