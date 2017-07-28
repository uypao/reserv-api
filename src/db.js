import Mongoose from 'mongoose';
import { mongoDbURL } from './config.json';

export default callback => {
	// connect to a database if needed, then pass it to `callback`:
	var promise = Mongoose.connect(mongoDbURL, {
		useMongoClient: true
	});
	console.log('Connecting to server...');
	promise.then(() => {
		console.log('Connected.');
	})
	callback();
}
