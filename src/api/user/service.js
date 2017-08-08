import BaseService from '../../lib/baseService';
import User from '../../models/user';

export default class UserService extends BaseService {
  constructor() {
    super(User);
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
