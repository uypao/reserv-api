import BaseService from '../../lib/baseService';
import Appointment from '../../models/appointment';

export default class AppointmentService extends BaseService {
  constructor() {
    super(Appointment);
  }
}
