import UserController from './api/user/controller';
import AppointmentController from './api/appointment/controller';
import AvailabilityController from './api/availability/controller';

export function registerRoutes(app) {
  app.use('/user', UserController());
  app.use('/appointment', AppointmentController());
  app.use('/availability', AvailabilityController());
}
