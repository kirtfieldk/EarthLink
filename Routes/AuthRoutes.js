const passport = require("passport");

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
};
