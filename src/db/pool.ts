import { Pool } from 'pg';

export const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	password: 'pass123',
	database: 'crudts',
	port: 15432,
});
