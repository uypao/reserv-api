import BaseService from '../../lib/baseService';
import Availability from '../../models/availability';

export default class AvailabilityService extends BaseService {
  constructor() {
    super(Availability);
  }
}
