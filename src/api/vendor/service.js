import _ from 'lodash';
import BaseService from '../../lib/baseService';
import User from '../../models/user';
import AuthService from '../auth/service';
import LocationHelper from '../helper/location';


export default class VendorService extends BaseService {
  constructor() {
    super(User);
    this.authService = new AuthService();
    this.locationHelper = new LocationHelper();
  }

  create(params) {
    params.is_vendor = 1;
    return new Promise((resolve, reject) => {
      let {address} = params.vendor;
      this.locationHelper.getGeoLocation(address)
      .then((res) => {
        params.vendor.address = res;
        return this.authService.signUp(params)
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
    })
  }

  findAll() {
    return new Promise((resolve, reject) => {
      User.aggregate(
        [{ $match: {
            is_vendor: true }
          },
          { $project: {
            code: '$vendor.code',
            business_name: '$vendor.business_name',
            business_type: '$vendor.business_type',
            business_detail: '$vendor.business_detail',
            email: '$vendor.email',
            mobile: '$vendor.mobile',
            address: '$vendor.address',
            services: '$vendor.services' }
      }])
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        console.log(err, 'err');
        reject(err);
      })
    })
  }


}
