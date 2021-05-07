import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.post('/', (req: Request, res: Response, next: NextFunction) => {});

router.get('/', (req: Request, res: Response, next: NextFunction) => {});

router.put('/', (req: Request, res: Response, next: NextFunction) => {});

router.delete('/', (req: Request, res: Response, next: NextFunction) => {});

export default router;
