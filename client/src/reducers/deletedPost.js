export default function(state = null, action) {
    switch (action.type) {
      case "DELETED_POST":
        return action.payload;
      default:
        return state;
    }
  }
  