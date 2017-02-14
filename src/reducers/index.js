import { combineReducers } from 'redux'
import usersReducer from './users-reducer'
import pollsReducer from './polls-reducer'
import currentPollReducer from './current-pole-reducer'

export default combineReducers({
  users: usersReducer,
  polls: pollsReducer,
  poll: currentPollReducer
})
