import Mongoose from 'mongoose';
let Schema = Mongoose.Schema;

let userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  client: {
    first_name: {
      type: String
    },
    last_name: {
      type: String
    },
    email: {
      type: String
    },
    mobile: {
      type: String
    }
  },
  vendor: {
    code: {
      type: String
    },
    business_type: {
      type: String
    },
    business_name: {
      type: String
    },
    email: {
      type: String
    },
    mobile: {
      type: String
    }
  }
})

let userModel = Mongoose.model('User', userSchema);
export default userModel;
