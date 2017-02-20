import React, { Component } from 'react'


export default class CreatePollOption extends Component {

  render(){
    return(
        <div>
          Text: <input type='text' ref='text'/>
          Image URL: <input type='text' ref='image' />
        </div>

    )
  }
}
