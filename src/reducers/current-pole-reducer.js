export default function(state="", action){
  switch (action.type) {
    case 'SHOW_CURRENT_POLL':
      return action.payload
    default:
      return state
  }
}
