import Jwt from 'jsonwebtoken';
import Config from '../../../config.json';

export default {

  sign(data) {
    Jwt.sign(data, Config.secretKey);
  },

  verify() {

  }
}
