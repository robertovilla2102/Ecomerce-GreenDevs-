const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const { User } = require("../models/index");
const { facebookAppKey, facebookCode } = require("../config");

passport.use(
  new FacebookStrategy(
      clientID: facebookAppKey,
      clientSecret: facebookCode,
      callbackURL: "http://www.example.com/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOrCreate(
        { where: { provider_id: profile.id } }
          .then(user => {
            if (user !== null) {
              done(null, user);
            } else {
              User.create({
                  provider: profile.provider,
                  provider_id : profile.id,
                  userName: profile.name,
                  address: profile.address,
                  birthDay: profile.birthDay,
                  userEmail: profile.email
              })
            }
          })
          .catch(err => done(err))
      );
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
