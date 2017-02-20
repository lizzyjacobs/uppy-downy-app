import React from 'react'
import { Route } from 'react-router'
import App from './App'
import UserSignUp from './components/user-sign-up'
import ShowPolls from './components/show-polls'
import Poll from './components/poll'
import Login from './components/login'
import Vote from './components/vote'
import UserPolls from './components/userPolls'
import CreatePoll from './components/createPoll'


export default (

  <Route path='/' component={App}>
    <Route path="signup" component={UserSignUp} />
    <Route path="login" component={Login} />
    <Route path="create-poll" component={CreatePoll} />
    <Route path="polls" component={ShowPolls}/>
    <Route path="my-dashboard" component={UserPolls} />
    <Route path=":id" component={Poll}>
      <Route path=":id" component={Vote} />
    </Route>
  </Route>
)
