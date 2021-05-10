import { pool } from '../db/pool';
import { QueryResult } from 'pg';

export const getUserService = async () => {
	try {
		const response: QueryResult = await pool.query(
			`SELECT * FROM users LIMIT 5`
		);
		return response.rows;
	} catch (err) {
		console.log(err);
	}
};

export const getUserByIdServices = async (id: string) => {
	try {
		const response: QueryResult = await pool.query(
			`SELECT * FROM users 
				WHERE id = $1`,
			[id]
		);
		return response.rows;
	} catch (err) {
		console.log(err);
	}
};

export const postUserService = async (
	name: string,
	surname: string,
	age: number,
	create_date: Date,
	email: string
) => {
	try {
		const response: QueryResult = await pool.query(
			`INSERT INTO users (name, surname, age, create_date, email) 
				VALUES ($1, $2, $3, $4, $5)`,
			[name, surname, age, create_date, email]
		);
		return response;
	} catch (err) {
		console.log(err);
	}
};

export const putUserServices = async (
	id: string,
	name: string,
	surname: string,
	age: number,
	create_date: Date,
	email: string
) => {
	try {
		const response: QueryResult = await pool.query(
			`UPDATE users 
				SET name= $1, surname= $2, age= $3, create_date= $4, email= $5 
					WHERE id= $6`,
			[name, surname, age, create_date, email, id]
		);
		return response;
	} catch (err) {
		console.log(err);
	}
};

export const deleteUserServices = async (id: string) => {
	try {
		const response: QueryResult = await pool.query(
			`DELETE FROM users
				WHERE id= $1`,
			[id]
		);
		return response;
	} catch (err) {
		console.log(err);
	}
};
