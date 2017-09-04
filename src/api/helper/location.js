import NodeGeocoder from 'node-geocoder';
import Config from '../../config.json';

export default class LocationHelper {
  constructor() {
    let apiKey = Config.google.geocodingApiKey;
    this.geocoder = NodeGeocoder({
      provider: 'google',
      httpAdapter: 'https',
      apiKey
    })
  }

  getGeoLocation(address) {
    return new Promise((resolve, reject) => {
      this.geocoder.geocode(address)
      .then((res) => {
        let data = res[0];
        resolve({
          longitude: data.longitude,
          latitude: data.latitude
        });
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
    })
  }

}
