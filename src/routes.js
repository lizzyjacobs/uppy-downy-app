import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import UserSignUp from './components/user-sign-up'
import UserDashboard from './components/user-dashboard'
import ShowPolls from './components/show-polls'
import Poll from './components/poll'
import Login from './components/login'


export default (

  <Route path='/' component={App}>
    <Route path="signup" component={UserSignUp} />
    <Route path="login" component={Login} />
    <Route path="dashboard" component={UserDashboard} />
    <Route path="polls" component={ShowPolls}>
      <Route path=":id" component={Poll} />
    </Route>
  </Route>
)
