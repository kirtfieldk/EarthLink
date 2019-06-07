export default function(state = null, action) {
    switch (action.type) {
      case "BLOGPOST":
        return action.payload || false;
      default:
        return state;
    }
  }