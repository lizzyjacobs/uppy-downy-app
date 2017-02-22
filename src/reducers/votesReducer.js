export default function(state=[], action){
  switch (action.type) {
    case 'CREATE_VOTE':
      return [...state, action.payload]
    default:
      return state
  }
}
