import { combineReducers } from 'redux'
import usersReducer from './users-reducer'
import pollsReducer from './polls-reducer'

export default combineReducers({
  users: usersReducer,
  polls: pollsReducer
})
