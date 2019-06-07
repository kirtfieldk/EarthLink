const passport = require("passport");
const GoogleStratagy = require("passport-google-oauth20").Strategy;
const GithubStratagy = require("passport-github2").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
passport.use(
  new GithubStratagy(
    {
      clientID: keys.githubClientId,
      clientSecret: keys.githubClientSecret,
      callbackURL: "/auth/github/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ userId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        userId: profile.id,
        name: profile.displayName,
        email: "profile.emails.value"
      }).save();
      done(null, user);
    }
  )
);
passport.use(
  new GoogleStratagy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ userId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        userId: profile.id,
        name: profile.displayName,
        email: "TBD"
      }).save();
      done(null, user);
    }
  )
);



// kamiera112211