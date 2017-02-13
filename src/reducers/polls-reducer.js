export default function(state=[], action){
  switch (action.type) {
    case 'CREATE_POLL':
      return action.payload
    default:
      return state
  }
}
