import React, { Component } from 'react'
import { connect } from 'react-redux'
import Flexbox from 'flexbox-react'
import { Bar } from 'react-chartjs-2'

import { fetchPolls } from '../actions'
import UserPolls from './userPolls'
import CreatePoll from './createPoll'
import { headerStyle } from '../stylesheet'


class UserDashboard extends Component {

  componentWillMount(){
    this.props.fetchPolls()
  }


  displayChart(){
    let voteData = []
    let optionLabels = []
    if (this.props.yourPolls.length > 0) {
      this.props.yourPolls.forEach((poll,i)=>{
        voteData.push(poll.votes.length)
        optionLabels.push(poll.title)
      })
      var data = {
        labels: optionLabels,
        datasets: [{
          label: 'Total Votes',
          data: voteData,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#EFE721",
            "#9F1629",
            "#1A87B9",
          ]
        }]
      }
    } else {
      data = { labels:['Create a Poll and get some votes to see results'],datasets:[{data:[0],backgroundColor:['grey']}] }
    }
    return (
      <Bar data={data} ref='doughnut' options={ {animation:{animateScale:true }},{ maintainAspectRatio: false } }/>
    )
  }

  render(){
    return(
      <div>
        <h2 style={headerStyle}>DASHBOARD</h2>
        <div style={{height:400, width:'92%', marginBottom:20}}>
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
