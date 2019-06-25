const mongoose = require("mongoose");
const blogPost = mongoose.model("Blog");

module.exports = app => {
  // Sends all the blogPost of a specific user
  app.get("/api/blogpost", async (req, res) => {
    const userPost = await blogPost.find({ _user: req.user.id });
    res.send(userPost);
  });
  //Sends all blogpost every created
  app.get("/api/allblogpost", async (req, res) => {
    const allPost = await blogPost.find({ display: "true" });
    res.send(allPost);
  });
  //Checks if user is logged in
  //if is user can send blog post
  app.post("/api/blogpost", async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: "You must be logged in" });
    }
    const { title, author, body, summery } = req.body;
    const blog = new blogPost({
      title,
      author,
      body,
      summery,
      display: "true",
      _user: req.user.id,
      date: Date.now()
    });
    try {
      await blog.save();
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
    res.redirect("/");
  });
  // /api/blogpost/delete/:id deletes an entry in the database
  //
  app.get("/api/blogpost/delete/:id", (req, res) => {
    blogPost.findByIdAndRemove({ _id: req.params.id }).then(post => {
      res.send(post);
    });
  });
};
