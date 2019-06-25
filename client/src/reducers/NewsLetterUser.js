export default function(state = null, action) {
    switch (action.type) {
      case "ADDED_USER":
        return action.payload;
      default:
        return state;
    }
  }
  