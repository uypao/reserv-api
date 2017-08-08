import UserController from './api/user/controller';
import AppointmentController from './api/appointment/controller';
import AvailabilityController from './api/availability/controller';
import AuthController from './api/auth/controller';

export function registerRoutes(app, passport) {
  app.use('/user', UserController());
  app.use('/auth', AuthController(passport));
  app.use('/appointment', AppointmentController());
  app.use('/availability', AvailabilityController());
}
