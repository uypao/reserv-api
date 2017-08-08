import { Router } from 'express';
import AuthService from './service';

export default (passport) => {
  let api = Router();
  let authService = new AuthService();

  api.get('/callback/facebook',
		passport.authenticate('facebook', { failureRedirect: '/' }), (req, res) => {
      res.status(200).json(req.user);
    }
	);

  api.get('/callback/google',
    passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
      res.status(200).json(req.user);
    }
  );

  api.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
  api.get('/facebook', passport.authenticate('facebook', { scope : 'email' }));

  api.post('/signUp', (req, res) => {
    let param = req.body;
    authService.signUp(param)
    .then((data) => {
      res.status(200).json({success: true, message: data});
    })
    .catch((err) => {
      res.status(400).json({success: false, message: err});
    })
  })

  api.post('/signIn', (req, res) => {
    let param = req.body;
    authService.signIn(param)
    .then((data) => {
      res.status(200).json({success: true, message: data});
    })
    .catch((err) => {
      res.status(400).json({success: false, message: err});
    })
  })



  return api;
}
