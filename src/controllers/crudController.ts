import { RequestHandler } from 'express';
import {
	postUserService,
	getUserService,
	getUserByIdServices,
	putUserServices,
	deleteUserServices,
} from '../services/crudServices';

export const getUser: RequestHandler = async (req, res) => {
	try {
		const user = await getUserService();
		res.status(200).json(user);
	} catch (err) {
		res.status(500);
		console.log(err);
	}
};

export const getUserById: RequestHandler = async (req, res) => {
	const { id } = req.params;
	try {
		const user = await getUserByIdServices(id);
		res.status(200).json(user);
	} catch (err) {
		console.log(err);
	}
};

export const postUser: RequestHandler = async (req, res) => {
	const { name, surname, age, create_date, email } = req.body;
	if (name && surname && age && create_date && email) {
		try {
			await postUserService(name, surname, age, create_date, email);
			res.status(200).json('User added!');
		} catch (err) {
			console.log(err);
			res.status(500).json('Error adding user');
		}
	} else {
		res.status(400).json('Information is missing!');
	}
};

export const putUser: RequestHandler = async (req, res) => {
	const { id } = req.params;
	const { name, surname, age, create_date, email } = req.body;
	if (name && surname && age && create_date && email && id) {
		try {
			await putUserServices(id, name, surname, age, create_date, email);
			res.status(200).json(`User ${id} edited succssefully!`);
		} catch (err) {
			console.log(err);
			res.status(500).json('Error editing user');
		}
	} else {
		res.status(400).json('Information is missing!');
	}
};

export const deleteUser: RequestHandler = async (req, res) => {
	try {
		const { id } = req.params;
		await deleteUserServices(id);
		res.status(200).json(`User ${id} eliminated`);
	} catch (err) {
		console.log(err);
	}
};
