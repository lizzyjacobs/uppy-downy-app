import React, { Component } from 'react'

import Flexbox from 'flexbox-react'

import UserPolls from './userPolls'
import CreatePoll from './createPoll'
import { headerStyle } from '../stylesheet'


export default class UserDashboard extends Component {
  render(){
    return(
      <div>
        <h2 style={headerStyle}>DASHBOARD</h2>
        <Flexbox justifyContent='space-around' alignContent='center'>
          < UserPolls />
          < CreatePoll />
        </Flexbox>
      </div>
    )
  }
}
