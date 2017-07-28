import { Router } from 'express';
import AppointmentService from './service';

export default () => {
  let api = Router();
  let appointmentService = new AppointmentService();

  api.post('/', (req, res) => {
    let params = req.body
    appointmentService.create(params)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
  })

  api.get('/', (req, res) => {
    appointmentService.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
	});

  api.get('/:id', (req, res) => {
    let id = req.params.id
    appointmentService.findById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
  })

	return api;


}
