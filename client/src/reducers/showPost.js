export default function(state = null, action) {
  switch (action.type) {
    case "POST_ID":
      return action.payload;
    default:
      return state;
  }
}
