import { Router } from 'express';
import UserService from '../user/service';

export default () => {
  let api = Router();
  let userService = new UserService();


}
