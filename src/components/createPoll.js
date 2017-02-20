import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createPoll } from '../actions/index'
import { connect } from 'react-redux'
import CreatePollOption from './createPollOption'


// STYLES
const textInputStyle = {
  margin: '20px',
  padding: '10px',
  backgroundImage: `url('../../input-bg1.png')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center bottom',
  border: 'none',
  textAlign: 'center',
  fontSize: '1rem',
}

const optionTitleStyle = {
  marginBottom: '0',
}

const submitContainerStyle = {
  backgroundImage: `url('../../btn-bg-grey.png')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
}

const submitInputStyle = {
  background: 'none',
  margin: '10px',
  padding: '10px',
  border: 'none',
  textAlign: 'center',
  fontSize: '1rem',
  color: 'gray',
}


class CreatePoll extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    const poll = {
      title: this.refs.title.value,
      optionAtext: this.refs.optionA.refs.text.value,
      optionAimage: this.refs.optionA.refs.image.value,
      optionBtext: this.refs.optionB.refs.text.value,
      optionBimage: this.refs.optionB.refs.image.value,
      user_id: this.props.user.id
    }
    this.props.createPoll(poll)
  }


  render(){
    return(
      <div>
        <h3>Ready to create a poll?</h3>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref='title' style={textInputStyle} placeholder='Poll Title' size='60'/>
          <p style={optionTitleStyle}>Option A:</p>
          <CreatePollOption ref='optionA'/>
          <p style={optionTitleStyle}>Option B:</p>
          <CreatePollOption ref='optionB'/>
          <div style={submitContainerStyle}>
            <input type='submit' style={submitInputStyle}/>
          </div>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createPoll}, dispatch)
}

function mapStateToProps(state) {
  return {
    polls: state.polls,
    user: state.user
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(CreatePoll)
