export default function(state=[], action){
  switch (action.type) {
    case 'CREATE_POLL':
      return [...state, action.payload]
    case 'FETCH_POLLS':
      return action.payload
    case 'CREATE_VOTE':
      let newPollArray = state.filter( poll => action.payload.id !== poll.id)
      return [...newPollArray, action.payload]
    default:
      return state
  }
}
