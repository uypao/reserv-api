import { Router } from 'express';
import ClientService from './service';

export default () => {
  let api = Router();
  let clientService = new ClientService();

  api.post('/', (req, res) => {
    let params = req.body
    clientService.create(params)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
  })

  api.get('/', (req, res) => {
    clientService.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
  });

  api.get('/:id', (req, res) => {
    let id = req.params.id
    clientService.findById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
  })

  return api;
}
