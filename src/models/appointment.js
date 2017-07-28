import Mongoose from 'mongoose';

let Schema = Mongoose.Schema;

let appointmentSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  vendor_id: {
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
  status: {
    type: Number,
    default: 1,
    enum: [1, 2, 3] //1=pending, 2=approved, 3=completed 4=cancelled?
  },
  is_paid: {
    type: Boolean,
    default: false
  },
  amount: {
    type: Number
  },
  service_rendered: {
    type: String
  },
  notes: {
    type: String
  }

})

let appointmentModel = Mongoose.model('Appointment', appointmentSchema);
export default appointmentModel;
