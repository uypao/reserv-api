import { Router } from 'express';
import UserService from './service';

export default () => {
  let api = Router();
  let userService = new UserService();

  api.post('/', (req, res) => {
    let params = req.body
    userService.create(params)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
  })

  api.get('/', (req, res) => {
    userService.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
	});

  api.get('/:id', (req, res) => {
    let id = req.params.id
    userService.findById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
  })

	return api;


}
