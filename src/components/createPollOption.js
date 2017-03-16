import React, { Component } from 'react'
import Flexbox from 'flexbox-react'


export default class CreatePollOption extends Component {

  render(){
    return(
      <Flexbox justifyContent='center'>
        <input type='text' ref='text' placeholder='Text' className="textInputStyle" size='40'/>
        <input type='text' ref='image' placeholder='Image URL' className="textInputStyle" size='40'/>
      </Flexbox>
    )
  }
}
