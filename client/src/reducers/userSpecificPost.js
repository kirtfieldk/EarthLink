export default function(state = null, action) {
    switch (action.type) {
      case "USER_POST":
        return action.payload;
      default:
        return state;
    }
  }
  