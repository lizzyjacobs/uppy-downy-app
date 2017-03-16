import React, { Component } from 'react'

export default class PollsPoll extends Component {

  displayPollOptions(poll){
    let optionA = this.props.poll.poll_options[0]
    let optionB = this.props.poll.poll_options[1]
    return (
      <div className="feed-poll__imageFlex">
        <div className="feed-poll__image--left">
          <img src={optionA.image} className="feed-poll__image" alt={optionA.text}/>
        </div>
        <div className="feed-poll__image--right">
          <img src={optionB.image} className="feed-poll__image" alt={optionB.text}/>
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
      <li onClick={() => this.props.handleClick(this.props.poll.id)} className="feed-poll">
        {this.displayPollOptions.call(this, this.props.poll)}
        <div className="feed-poll__title">
          <span>{this.splicedPollTitle(this.props.poll.title)}</span>
        </div>
      </li>
    )
  }
}
