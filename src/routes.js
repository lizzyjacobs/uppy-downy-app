import React from 'react'
import { Route } from 'react-router'
import App from './App'
import UserSignUp from './components/userSignUp'
import AllPolls from './components/allPolls'
import Poll from './components/poll'
import Login from './components/userLogin'
import Vote from './components/vote'
// import UserPolls from './components/userPolls'
// import CreatePoll from './components/createPoll'
import UserDashboard from './components/userDashboard'


export default (

  <Route path='/' component={App}>
    <Route path="signup" component={UserSignUp} />
    <Route path="login" component={Login} />
    <Route path="polls" component={AllPolls}/>
    <Route path="my-dashboard" component={UserDashboard} />
    <Route path=":id" component={Poll}>
      <Route path=":id" component={Vote} />
    </Route>
  </Route>
)
