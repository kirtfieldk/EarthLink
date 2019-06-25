const mongoose = require("mongoose");
const newsLetter = mongoose.model("email");

module.exports = app => {
  app.post("/api/addToNewsLetter", async (req, res, done) => {
    const { newsLetterEmail } = req.body;
    const existUser = await newsLetter.findOne({ newsLetterEmail });
    if(existUser){
      return done(null, existUser);
    }
    const emailToAdd = await new newsLetter({
      newsLetterEmail,
      display: true
    }).save();
    try {
      await emailToAdd.save();
      res.send(emailToAdd);
    } catch (err) {
      res.status(422).send(err);
    }
  });
  app.get("/api/addtonewsletter", async (req, res) => {
    const response = await newsLetter.find({ display: true });
    res.send(response);
  });
};
