import React, { Component } from 'react'
import { connect } from 'react-redux'
import Flexbox from 'flexbox-react'
import { Bar } from 'react-chartjs-2'

import { fetchPolls } from '../actions'
import UserPolls from './userPolls'
import CreatePoll from './createPoll'
import { sideMargins, headerStyle } from '../stylesheets/stylesheet'


class UserDashboard extends Component {

  componentWillMount(){
    this.props.fetchPolls()
  }

  displayChart(){
    let voteData = []
    let optionLabels = []
    let optionATitles = []
    let optionBTitles = []
    let chartOptions = {
      animation: { animateScale:true },
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: false,
            minRotation: 30
          }
        }],
        yAxes: [{
          stacked: true,
          ticks: {
            min: 0
          }
        }]
      },
      tooltips: {
        callbacks: {
          afterLabel: function(e) {return this.props.yourPolls[e.index].poll_options[e.datasetIndex].text}.bind(this)
        }
      }
    }
    if (this.props.yourPolls.length > 0) {
      let optionAVotes = []
      let optionBVotes = []
      this.props.yourPolls.forEach((poll,i)=>{
        let optionA = {
          title: poll.poll_options[0].text,
          id: poll.poll_options[0].id,
          votes: 0
        }
        let optionB = {
          title: poll.poll_options[1].text,
          id: poll.poll_options[1].id,
          votes: 0
        }
        poll.votes.forEach((vote,i)=>{
          if ( vote.poll_option_id == optionA.id ) {
            optionA.votes += 1
          } else if ( vote.poll_option_id == optionB.id ) {
            optionB.votes += 1
          }
        })
        optionAVotes.push(optionA.votes)
        optionBVotes.push(optionB.votes)
        optionATitles.push(optionA.title)
        optionBTitles.push(optionB.title)
        optionLabels.push(poll.title)
      })
      var data = {
        labels: optionLabels,
        datasets: [
          {
            label: 'Option A',
            data: optionAVotes,
            backgroundColor: "rgba(238,95,69,0.5)",
            borderColor: "rgba(238,95,69,0.8)",
            borderWidth: 2
          },
          {
            label: 'Option B',
            data: optionBVotes,
            backgroundColor: "rgba(54,162,235,0.5)",
            borderColor: "rgba(54,162,235,0.8)",
            borderWidth: 2
          }
        ]
      }
    } else {
      data = { labels:['Create a Poll and get some votes to see results'],datasets:[{data:[0],backgroundColor:['grey']}] }
    }
    return (
      <Bar data={data} ref='doughnut' options={chartOptions}/>
    )
  }

  render(){
    return(
      <div>
        <h2 style={headerStyle}>DASHBOARD</h2>
        <div style={sideMargins}>
          {this.displayChart()}
        </div>
        <Flexbox justifyContent='space-around' alignContent='center'>
          < UserPolls />
          < CreatePoll />
        </Flexbox>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPolls: function(){
      let action = fetchPolls()
      dispatch( action )
    }
  }
}


function mapStateToProps(state){
  const yourPolls = state.polls.filter( poll => poll.user_id === state.user.id)

  return{
    yourPolls: yourPolls
  }

}

export default connect( mapStateToProps, mapDispatchToProps )(UserDashboard)
