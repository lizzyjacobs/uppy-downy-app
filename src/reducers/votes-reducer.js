export default function(state=[], action){
  switch (action.type) {
    case 'CREATE_VOTE':
    debugger
      return [...state, action.payload]
    default:
      return state
  }
}
