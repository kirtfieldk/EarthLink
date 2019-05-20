const passport = require("passport");
const mongoose = require("mongoose");
const Photo = mongoose.model("Images");
const Upload = require("./upload");

module.exports = app => {
  /*
Below are the needed routes for user authetication
*/
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  app.get(
    "/auth/github",
    passport.authenticate("github", {
      scope: ["profile", "email"]
    })
  );
  /*
Once the user successfully logs in the user is redirected to the Homepage
*/
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/profile");
    }
  );
  app.get(
    "/auth/github/callback",
    passport.authenticate("github"),
    (req, res) => {
      res.redirect("/profile");
    }
  );
  /*
The logout and cuurent_user are to find and add to the database
*/
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
  app.get("/upload/fileupload", (req, res) => {
    Photo.find({}, ["path", "caption"], { sort: { _id: -1 } }, function(
      err,
      photos
    ) {
      if (err) throw err;
      res.render("index", {
        title: "NodeJS file upload tutorial",
        msg: req.query.msg,
        photolist: photos
      });
    });
  });

  /** Upload file to path and add record to database */

  app.post("/upload", function(req, res) {
    Upload(req, res, (error) => {
      if (error) {
        res.redirect("/?msg=3");
      } else {
        if (req.file == undefined) {
          res.redirect("/?msg=2");
        } else {
          /**
           * Create new record in mongoDB
           */
          var fullPath = "files/" + req.file.filename;

          var document = {
            path: fullPath,
            caption: req.body.caption
          };

          var photo = new Photo(document);
          photo.save(function(error) {
            if (error) {
              throw error;
            }
            res.redirect("/profile");
          });
        }
      }
    });
  });
};
