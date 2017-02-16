import { combineReducers } from 'redux'
import usersReducer from './users-reducer'
import pollsReducer from './polls-reducer'
import currentPollReducer from './current-poll-reducer'
import votesReducer from './votes-reducer'

export default combineReducers({
  user: usersReducer,
  polls: pollsReducer,
  poll: currentPollReducer,
  votes: votesReducer
})
