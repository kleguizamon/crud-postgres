import express, { Request, Response, NextFunction, Application } from 'express';
import indexRouter from './routes/index';
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', indexRouter);

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
// 	res.status(500).json({ message: err.message });
// });

export = app.listen(4000);
