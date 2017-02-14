export default function(state=[], action){
  switch (action.type) {
    case 'CREATE_POLL':
      return [...state, action.payload]
    case 'FETCH_POLLS':
      return action.payload
    default:
      return state
  }
}
