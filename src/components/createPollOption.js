import React, { Component } from 'react'
import Flexbox from 'flexbox-react'


// STYLES
const textInputStyle = {
  margin: '20px',
  padding: '10px',
  backgroundImage: `url('../../input-bg1.png')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center bottom',
  border: 'none',
  textAlign: 'center',
  fontSize: '1rem',
}


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
