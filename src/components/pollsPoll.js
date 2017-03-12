import React, { Component } from 'react'
import Flexbox from 'flexbox-react'

export default class PollsPoll extends Component {

  constructor(props) {
    super(props)
  }

  onImageLoad() {
    // debugger
  }

  displayPollOptions(poll){
    return (
      <div className="pollImageFlex">
        <div className="pollImageLeft">
          {/* <img onLoad={this.onImageLoad.bind(this.props.poll.poll_options[0])} src={this.props.poll.poll_options[0].image} className="pollImage pollImageLeft" /> */}
          <img onLoad={this.onImageLoad.bind(this.props.poll.poll_options[0])} src={this.props.poll.poll_options[0].image} className="pollImage" />
        </div>
        <div className="pollImageRight">
          {/* <img onLoad={this.onImageLoad.bind(this.props.poll.poll_options[1])} src={this.props.poll.poll_options[1].image} className="pollImage pollImageRight" /> */}
          <img onLoad={this.onImageLoad.bind(this.props.poll.poll_options[1])} src={this.props.poll.poll_options[1].image} className="pollImage" />
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
        {/* <Flexbox justifyContent='space-around' alignContent='center'> */}
          {this.displayPollOptions.call(this, this.props.poll)}
        {/* </Flexbox> */}
        <div className="pollsPollTitle">
          <span>{this.splicedPollTitle(this.props.poll.title)}</span>
        </div>
      </li>
    )
  }
}
