import BaseService from '../../lib/baseService';
import User from '../../models/user';

export default class ClientService extends BaseService {
  constructor() {
    super(User);
  }

  findAll() {
    return new Promise((resolve, reject) => {
      User.find({ is_vendor: 0})
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
    })
  }

}
