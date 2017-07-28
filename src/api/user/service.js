import BaseService from '../../lib/baseService';
import User from '../../models/user';

export default class UserService extends BaseService {
  constructor() {
    super(User);
  }
}
