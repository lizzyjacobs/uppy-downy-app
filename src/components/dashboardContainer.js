import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPolls, showCurrentPoll } from '../actions'
import DashboardPolls from './dashboardPolls'
import CreatePoll from './createPoll'
import DashboardChart from './dashboardChart'


class DashboardContainer extends Component {

  componentWillMount(){
    this.props.fetchPolls()
  }

  render(){
    return(
      <div>
        <h2 className="dashboard__header">DASHBOARD</h2>
        <DashboardChart yourPolls={this.props.yourPolls} />
        <div className="dashboard__contents">
          <DashboardPolls yourPolls={this.props.yourPolls} handleClick={this.props.showCurrentPoll}/>
          <CreatePoll />
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPolls: function(){
      let action = fetchPolls()
      dispatch( action )
    },
    showCurrentPoll: function(pollId){
      let action = showCurrentPoll(pollId)
      dispatch ( action )
    }
  }
}

function mapStateToProps(state){
  const yourPolls = state.polls.filter( poll => poll.user_id === state.user.id)

  return{
    yourPolls: yourPolls
  }

}

export default connect( mapStateToProps, mapDispatchToProps )(DashboardContainer)
