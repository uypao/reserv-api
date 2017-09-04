import Mongoose from 'mongoose';
let Schema = Mongoose.Schema;

let userSchema = new Schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
  salt: {
    type: String
  },
  oauth_id: {
    type: String
  },
  display_name: {
    type: String
  },
  picture_url:{
    type: String
  },
  provider: {
    type: String
  },
  gender: {
    type: String
  },
  is_vendor: {
    type: Boolean,
    default: 0
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
    business_detail: {
      type: String
    },
    address: {
      longitude: {
        type: Number
      },
      latitude: {
        type: Number
      }
    },
    business_image_path: {
      type: String
    },
    email: {
      type: String
    },
    mobile: {
      type: String
    },
    services: [{
      name: { type: String },
      price: { type: Number }
    }]
  }
})

let userModel = Mongoose.model('User', userSchema);
export default userModel;
