import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

export default class DashboardChart extends Component {

  displayChart(){
    let aVoteCounts = []
    let bVoteCounts = []
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
        let aVoteCount = 0
        let bVoteCount = 0
        poll.votes.forEach((vote)=>{
          if (vote.poll_option_id === poll.poll_options[0].id) {
            aVoteCount++
          } else if (vote.poll_option_id === poll.poll_options[1].id) {
            bVoteCount++
          }
        })
        aVoteCounts.push(aVoteCount)
        bVoteCounts.push(bVoteCount)
        optionLabels.push(poll.title)
      })
      var data = {
        labels: optionLabels,
        datasets: [
          {
            label: 'Option A',
            data: aVoteCounts,
            backgroundColor: "rgba(54,162,235,0.5)",
            borderColor: "rgba(54,162,235,0.5)",
            borderWidth: 2
          },
          {
            label: 'Option B',
            data: bVoteCounts,
            backgroundColor: "rgba(238,95,69,0.5)",
            borderColor: "rgba(238,95,69,0.8)",
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

  render() {
    return (
      <div className="sideMargins">
        {this.displayChart()}
      </div>
    )
  }

}
