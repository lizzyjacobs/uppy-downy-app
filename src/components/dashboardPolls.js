import React, { Component } from 'react'

export default class DashboardPolls extends Component {

  showYourPolls(){
    let yours = this.props.yourPolls.map((poll,i) => {
      return(
        <li key={i} onClick={() => this.props.handleClick(poll.id)}>
          <p>
            <span className="underline">{this.splicedPollTitle(poll.title)}</span>
          </p>
        </li>
      )
    })
    // debugger
    return ( yours ? yours : "You have no polls" )
    // return yours
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
