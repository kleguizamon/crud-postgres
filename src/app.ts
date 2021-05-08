import express, { Request, Response, NextFunction } from 'express';

import indexRouter from './routes/index';

const app = express();

app.use('/users', indexRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({ message: err.message });
});

app.listen(4000);
