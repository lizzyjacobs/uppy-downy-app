import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Flexbox from 'flexbox-react'
import { Doughnut } from 'react-chartjs-2'

import Vote from './vote'
import { showCurrentPoll, fetchPolls } from '../actions'
import {
  sideMargins,
  pollContainerStyle,
  pollOptionContainerStyle,
  pollOptionImageStyle,
  buttonContainerStyle,
  buttonInputStyle,
  doughnutStyle
} from '../stylesheet'


class Poll extends Component {
  constructor(){
    super()
    this.hasVotesData = this.hasVotesData.bind(this)
    this.userHasVoted = this.userHasVoted.bind(this)
    this.displayChart = this.displayChart.bind(this)
  }

  componentWillMount(){
    this.props.fetchPolls()
    const id = parseInt(this.props.params.id)
    this.props.showCurrentPoll(id)
  }

  hasVotesData(){
    return this.props.poll.hasOwnProperty('votes')
  }

  userHasVoted(){
    return this.props.poll.votes.find( vote => vote.user_id === this.props.user.id )
  }

  handleNextClick(){
    let newPollId = (this.props.poll.id)%(this.props.polls.length) + 1
    this.props.showCurrentPoll(newPollId)
    this.displayChart()
  }

  countVotesPercent(option){
    return Math.round(this.props.poll.votes.filter( vote => vote.poll_option_id === this.props.poll.poll_options[option].id).length/this.props.poll.votes.length * 10000)/100
  }

  countVotes(option){
    return this.props.poll.votes.filter( vote => vote.poll_option_id === this.props.poll.poll_options[option].id).length
  }

  chooseDisplay(){
    if(this.hasVotesData()) {
      if (this.userHasVoted()) {
        return this.props.poll.poll_options.map( (option, i) =>
          <div key={i} style={pollOptionContainerStyle}>
            <img src={option.image} alt="" style={pollOptionImageStyle}/>
            <h3>{option.text}: {this.countVotesPercent(i)}% with {this.countVotes(i)} Vote(s)</h3>
          </div>
        )
      } else {
        return this.props.poll.poll_options.map( (option,i) =>
          <div key={i} style={pollOptionContainerStyle}>
            <p>{option.text}</p>
            <img src={option.image} alt="" style={pollOptionImageStyle}/>
            <Vote optionId={option.id}/>
          </div>
        )
      }
    }
  }

  displayChart(){
    let voteData = []
    let optionLabels = []
    let chartOptions = {
      animation:{animateScale:true },
      maintainAspectRatio: false,
      rotation: (0.5 * Math.PI)
    }
    if ((this.hasVotesData()) && (this.userHasVoted())){
      this.props.poll.poll_options.forEach((option,i)=>{
        voteData.push(this.countVotes(i))
        optionLabels.push(option.text)
      })
      var data = {
        labels: optionLabels,
        datasets: [{
          data: voteData,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
      }
    } else {
      data = { labels:['Vote to see results'],datasets:[{data:[0],backgroundColor:['grey']}] }
    }
    return (
      <Doughnut data={data} ref='doughnut' width={200} height={200} options={chartOptions}/>
    )
  }

  render(){

    return(
      <div style={pollContainerStyle, sideMargins}>
        <h2 style={{wordWrap:'break-word'}}>{this.props.poll.title}</h2>
        <Flexbox justifyContent='center' alignItems='center' style={{marginBottom:40}}>
          {this.chooseDisplay()}
        </Flexbox>
        <div style={doughnutStyle}>
          {this.displayChart()}
        </div>
        <div style={buttonContainerStyle}>
          <button onClick={this.handleNextClick.bind(this)} style={buttonInputStyle}>Next poll!</button>
        </div>
      </div>
    )
  }

}

function mapStateToProps(state, ownProps) {
  const poll = state.polls.find( poll => poll.id === state.poll ) || {}
  return {
    poll: poll,
    user: state.user,
    polls: state.polls
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({showCurrentPoll, fetchPolls}, dispatch)
}

export default connect( mapStateToProps, mapDispatchToProps )( Poll )
