import { Router } from 'express';
import VendorService from './service';

export default () => {
  let api = Router();
  let vendorService = new VendorService();

  api.post('/', (req, res) => {
    let params = req.body
    vendorService.create(params)
    .then((data) => {
      res.status(201).json({success: true, message: data});
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({success: false, message: err});
    })
  })

  api.get('/', (req, res) => {
    vendorService.findAll()
    .then((data) => {
      res.status(200).json({success: true, message: data});
    })
    .catch((err) => {
      res.status(400).json({success: false, message: err});
    })
  });

  api.get('/:id', (req, res) => {
    let id = req.params.id
    vendorService.findById(id)
    .then((data) => {
      res.status(200).json({success: true, message: data});
    })
    .catch((err) => {
      res.status(400).json({success: false, message: err});
    })
  })

  return api;
}
