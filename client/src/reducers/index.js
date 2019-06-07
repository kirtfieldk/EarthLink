import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducers";
import blogPostReducer from "./blogReducer";
import userPost from "./retrievePost";
import postId from "./showPost";
import UserSpecificPost from "./userSpecificPost";
import DeletedPost from "./deletedPost";
export default combineReducers({
  auth: authReducer,
  blog: blogPostReducer,
  userPost,
  postId,
  UserSpecificPost,
  DeletedPost,
  form: formReducer
});
