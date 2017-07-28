export default class BaseService {
  constructor(model) {
    this.model = model;
  }

  create(params) {
    return new Promise((resolve, reject) => {
      this.model.create(params)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
    });
  }

  findAll() {
    return new Promise((resolve, reject) => {
      this.model.find({})
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
    })
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      this.model.findById(id)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
    })
  }

}
