import { Router } from 'express';
import AvailabilityService from './service';

export default () => {
  let api = Router();
  let availabilityService = new AvailabilityService();

  api.post('/', (req, res) => {
    let params = req.body
    availabilityService.create(params)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
  })

  api.get('/', (req, res) => {
    availabilityService.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
	});

  api.get('/:id', (req, res) => {
    let id = req.params.id
    availabilityService.findById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
  })

	return api;


}
