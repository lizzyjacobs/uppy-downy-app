import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import pollsReducer from './pollsReducer'
import currentPollReducer from './currentPollReducer'
import votesReducer from './votesReducer'

export default combineReducers({
  user: usersReducer,
  polls: pollsReducer,
  poll: currentPollReducer,
  votes: votesReducer
})
