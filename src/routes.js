import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import UserSignUp from './components/user-sign-up'
import UserDashboard from './components/user-dashboard'
import ShowPolls from './components/show-polls'
import Poll from './components/poll'


export default (

  <Route path='/' component={App}>
    <Route path="signup" component={UserSignUp} />
    <Route path="dashboard" component={UserDashboard} />
    <Route path="polls" component={ShowPolls}>
      <Route path=":id" component={Poll} />
    </Route>
  </Route>
)
