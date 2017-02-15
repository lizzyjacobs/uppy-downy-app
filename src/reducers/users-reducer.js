export default function(state={}, action){
  switch (action.type) {
    case 'CREATE_USER':
      return action.payload.data.user
    case 'FETCH_USER':
      return action.payload.data.user
    case 'LOGIN_USER':
      return action.payload.data.user
    default:
      return state
  }
}
