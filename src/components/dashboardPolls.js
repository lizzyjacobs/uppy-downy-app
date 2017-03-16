import React, { Component } from 'react'

export default class DashboardPolls extends Component {

  showYourPolls(){
    let yours = this.props.yourPolls.map((poll,i) => {
      return(
        <li key={i} onClick={() => this.props.handleClick(poll.id)}>
          {this.splicedPollTitle(poll.title)}
        </li>
      )
    })
    return yours
  }

  splicedPollTitle(pollTitle){
    if ( pollTitle.length > 26 ) {
      return pollTitle.slice(0,23) + '...'
    } else {
      return pollTitle
    }
  }

  render(){
    return(
      <ul className="dashboard__polls">
        <h3>YOUR POLLS</h3>
        {this.showYourPolls()}
      </ul>
    )
  }

}
