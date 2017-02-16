export default function(state=[], action){
  switch (action.type) {
    case 'CREATE_VOTE':
      console.log([...state, action.payload])
      return [...state, action.payload]
    default:
      return state
  }
}
