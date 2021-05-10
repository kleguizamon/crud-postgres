import { RequestHandler } from 'express';

export const checkHealth: RequestHandler = async (req, res, next) => {
	try {
		res.status(200).json('Hi!');
	} catch (err) {
		console.log(err);
		next(err);
	}
};
