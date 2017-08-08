import User from '../../models/user';
import Bcrypt from 'bcrypt';

export default class AuthService{
  constructor() {

  }

  signIn(credentials) {
    return new Promise((resolve, reject) => {
      let { email, password } = credentials;
      // get user
      User.find({ email: email })
      .then((data) => {
        if (data.length != 0) {
          let user = data[0];
          let hash = Bcrypt.hashSync(password, user.salt);
          if (hash == user.password) {
            resolve('ok');
          }
        } else {
          reject('Username or Password is incorrect')
        }
      })
      .catch((err) => {
        reject(err)
      })
    })

  }

  signUp(param) {
    return new Promise((resolve, reject) => {
      let { email, password, displayName } = param;
      // check if email exists
      User.find({ email: email })
      .then((data) => {
        if (data.length != 0) {
          reject('Email already exists!');
        } else {
          let salt = Bcrypt.genSaltSync(10);
          let hash = Bcrypt.hashSync(password, salt);
          let user = new User({
            email: email,
            password: hash,
            salt: salt,
            display_name: displayName
          });
          user.save()
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
}
