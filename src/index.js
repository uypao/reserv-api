import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import initializeDb from './db';
// import middleware from './middleware';
import config from './config.json';
import passport from 'passport';
import { registerPassportStrategies } from './lib/externalAuth';
import { registerRoutes } from './routes';

let app = express();

// logger
app.use(morgan('dev'));
// parse application/json
app.use(bodyParser.json())

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(passport.initialize());
app.use(passport.session());

registerPassportStrategies(passport);

// connect to db
initializeDb( db => {
	let port = process.env.PORT || config.port
	registerRoutes(app, passport);

	app.listen(port, () => {
		console.log(`Started on port ${port}`);
	});
});

export default app;
