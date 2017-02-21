import React, { Component } from 'react'
import Flexbox from 'flexbox-react'

import { textInputStyle } from '../stylesheet'


export default class CreatePollOption extends Component {

  render(){
    return(
      <Flexbox justifyContent='center'>
        <input type='text' ref='text' placeholder='Text' style={textInputStyle} size='40'/>
        <input type='text' ref='image' placeholder='Image URL' style={textInputStyle} size='40'/>
      </Flexbox>
    )
  }
}
