import axios from "axios";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: "FETCH_USER", payload: res.data });
};
export const addBlogPost = (blogValues, history) => async dispatch => {
  const res = await axios.post("/api/blogpost", blogValues);
  history.push("/profile");
  dispatch({ type: "BLOGPOST", payload: res.data });
};
export const retrieveBlogPost = () => async dispatch => {
  const res = await axios.get("/api/allblogpost");
  dispatch({ type: "ALL_POST", payload: res.data });
};
export const showPost = userId => async dispatch => {
  const response = await axios.get("/api/allblogpost");
  const post = response.data.filter(blogpost => blogpost._id === userId);
  dispatch({ type: "POST_ID", payload: post[0] });
};
export const retrieveUserPost = () => async dispatch => {
  const res = await axios.get("/api/blogpost");
  dispatch({ type: "USER_POST", payload: res.data });
};
export const deleteUserPost = (userId, history) => async dispatch => {
  const response = await axios.get(`/api/blogpost/delete/${userId}`);
  history.push("/profile");
  dispatch({ type: "DELETED_POST", payload: response.data });
};
export const addUserToNewsLetter = email => async dispatch => {
  const response = await axios.post("/api/addtonewsletter", {
    newsLetterEmail: email
  });
  dispatch({ type: "ADDED_USER", payload: response.data });
};
