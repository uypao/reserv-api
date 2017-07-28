import Mongoose from 'mongoose';
let Schema = Mongoose.Schema;

let availabilitySchema = new Schema({
  vendor_code: {
    type: String,
    required: true
  },
  date_from: {
    type: Date,
    required: true
  },
  date_to: {
    type: Date,
    required: true
  },
  is_booked: {
    type: Boolean,
    default: false
  }
})

let availabilityModel = Mongoose.model('Availability', availabilitySchema);
export default availabilityModel;
