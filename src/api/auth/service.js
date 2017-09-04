import User from '../../models/user';
import Bcrypt from 'bcrypt';
import _ from 'lodash';

export default class AuthService{
  constructor() {

  }

  signIn(credentials) {
    return new Promise((resolve, reject) => {
      let { email, password } = credentials;
      if ((email) || (password)) {
        // get user
        User.find({ email: email.toLowerCase(), provider: null }).lean()
        .then((data) => {
          if (data.length != 0) {
            let user = data[0];
            let hash = Bcrypt.hashSync(password, user.salt);
            if (hash == user.password) {
              // TODO convert to JWT
              return resolve(_.omit(user, ['password', 'salt', '__v']));
            }
          }
          return reject('Email or Password is incorrect')
        })
        .catch((err)=>{
          reject(err);
        })
      } else {
        return reject('Email and Password is required')
      }
    })
  }

  signUp(param) {
    return new Promise((resolve, reject) => {
      let { email, password } = param;
      // check if email exists
      console.log(param, 'param');
      if (!(email) || !(password)) return reject('Email and Password is required');
      User.find({ email: email.toLowerCase() }).lean()
      .then((data) => {
        if (data.length != 0) {
          reject('Email already exists!');
        } else {
          param.email = email.toLowerCase()
          param.salt = Bcrypt.genSaltSync(10);
          param.password = Bcrypt.hashSync(password, param.salt);
          User.create(param)
          .then((data) => {
            resolve(data);
          })
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })

    })
  }

  createOauthUser(profile) {
    return new Promise((resolve, reject) => {
      let { id } = profile;
      // picture = facebook, image = google
      let { displayName, name, email, picture, gender, image } = profile._json;
      let pictureUrl = (picture) ? picture.data.url : image.url;
      // find user
      User.find({ oauth_id: id})
      .then((data) => {
        if (data.length != 0) {
          // return if found
          resolve(data);
        } else {
          // create user if not exists
          let user = new User({
            oauth_id: id,
            display_name: displayName ? displayName : name,
            email: email ? email : profile.email,
            picture_url: pictureUrl,
            provider: profile.provider,
            gender: gender
          });
          user.save()
          .then((data) => {
            resolve(data);
          })
        }
      })
      .catch((err) => {
        console.log(err);
        reject({ message: err });
      })
    })
  }

}
