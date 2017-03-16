import React, { Component } from 'react'

export default class PollsPoll extends Component {

  displayPollOptions(poll){
    let optionA = this.props.poll.poll_options[0]
    let optionB = this.props.poll.poll_options[1]
    return (
      <div className="pollImageFlex">
        <div className="pollImageLeft">
          <img src={optionA.image} className="pollImage" alt={optionA.text}/>
        </div>
        <div className="pollImageRight">
          <img src={optionB.image} className="pollImage" alt={optionB.text}/>
        </div>
      </div>
    )
  }

  splicedPollTitle(pollTitle){
    if ( pollTitle.length > 38 ) {
      return pollTitle.slice(0,35) + '...'
    } else {
      return pollTitle
    }
  }

  render() {
    return (
      <li key={this.props.i} onClick={() => this.props.handleClick(this.props.poll.id)} className="pollsPollStyle">
        {this.displayPollOptions.call(this, this.props.poll)}
        <div className="pollsPollTitle">
          <span>{this.splicedPollTitle(this.props.poll.title)}</span>
        </div>
      </li>
    )
  }
}
