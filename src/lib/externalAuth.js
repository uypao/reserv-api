import FacebookStrategy from 'passport-facebook';
import GoogleStrategy from 'passport-google-oauth2';
import config from '../config.json';
import UserService from '../api/user/service';

export function registerPassportStrategies(passport){
  const userService = new UserService();
  // FacebookStrategy
  passport.use('facebook', new FacebookStrategy({
    clientID: config.facebook.clientId,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callback,
    profileFields: ['id', 'displayName', 'picture.type(large)', 'email']
  }, function(access_token, refresh_token, profile, done) {
    userService.createOauthUser(profile)
    .then((data) => {
      return done(null, data);
    })
    .catch((err) => {
      return done(null, false, { err });
    })
  }));

  // GoogleStrategy
  passport.use(new GoogleStrategy({
    clientID: config.google.clientId,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callback,
    passReqToCallback: true
  }, function(req, accessToken, refreshToken, profile, done) {
    userService.createOauthUser(profile)
    .then((data) => {
      return done(null, data);
    })
    .catch((err) => {
      return done(null, false, { err });
    })
  }));

  passport.serializeUser(function(user, done) {
    console.log('serialize', user);
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    console.log('deserialize', obj);
    done(null, obj);
  });

}
