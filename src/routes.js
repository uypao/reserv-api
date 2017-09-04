import VendorController from './api/vendor/controller';
import ClientController from './api/client/controller';
import AppointmentController from './api/appointment/controller';
import AvailabilityController from './api/availability/controller';
import AuthController from './api/auth/controller';

export function registerRoutes(app, passport) {
  app.use('/vendor', VendorController());
  app.use('/client', ClientController())
  app.use('/auth', AuthController(passport));
  app.use('/appointment', AppointmentController());
  app.use('/availability', AvailabilityController());
}
