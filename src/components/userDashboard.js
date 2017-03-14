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
      }
    }
    if (this.props.yourPolls.length > 0) {
      this.props.yourPolls.forEach((poll,i)=>{
        // iterate through each option
          // Set counters
          // iterate through votes
            // Add to counter

        voteData.push(poll.votes.length)
        optionLabels.push(poll.title)
      })
      var data = {
        labels: optionLabels,
        datasets: [{
          label: 'Total Votes',
          data: voteData,
          backgroundColor: [
            "rgba(185,66,26,0.5)",
            "rgba(54,162,235,0.5)",
            "rgba(238,95,69,0.5)",
            "rgba(255,206,86,0.5)",
            "rgba(69,238,225,0.5)",
            "rgba(159,22,41,0.5)",
            "rgba(219,9,236,0.5)",
            "rgba(85,238,69,0.5)",
            "rgba(133,69,238,0.5)",
            "rgba(43,26,185,0.5)",
          ],
          borderColor: [
            "rgba(185,66,26,0.8)",
            "rgba(54,162,235,0.8)",
            "rgba(238,95,69,0.8)",
            "rgba(255,206,86,0.8)",
            "rgba(69,238,225,0.8)",
            "rgba(159,22,41,0.8)",
            "rgba(219,9,236,0.8)",
            "rgba(85,238,69,0.8)",
            "rgba(133,69,238,0.8)",
            "rgba(43,26,185,0.8)",
          ],
          borderWidth: 2
        },
        {
          label: 'Votes 2',
          data: voteData,
          backgroundColor: [
            "rgba(185,66,26,0.5)",
            "rgba(54,162,235,0.5)",
            "rgba(238,95,69,0.5)",
            "rgba(255,206,86,0.5)",
            "rgba(69,238,225,0.5)",
            "rgba(159,22,41,0.5)",
            "rgba(219,9,236,0.5)",
            "rgba(85,238,69,0.5)",
            "rgba(133,69,238,0.5)",
            "rgba(43,26,185,0.5)",
          ],
          borderColor: [
            "rgba(185,66,26,0.8)",
            "rgba(54,162,235,0.8)",
            "rgba(238,95,69,0.8)",
            "rgba(255,206,86,0.8)",
            "rgba(69,238,225,0.8)",
            "rgba(159,22,41,0.8)",
            "rgba(219,9,236,0.8)",
            "rgba(85,238,69,0.8)",
            "rgba(133,69,238,0.8)",
            "rgba(43,26,185,0.8)",
          ],
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
