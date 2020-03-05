const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/index");

passport.use(
  new LocalStrategy({ usernameField: "userEmail" }, function(
    userEmail,
    password,
    done
  ) {
    User.findOne({ where: { userEmail: userEmail } }).then(user => {
      if (!user) {
        return done(null, false);
      }
      if (!user.validPassword(password)) {
        return done(null, false);
      }
      return done(null, user);
    });
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findByPk(id).then(user => {
    done(null, user);
  });
});
