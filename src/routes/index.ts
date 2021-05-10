import { Router } from 'express';
const router = Router();

import { checkHealth } from '../controllers/healthController';
import {
	getUser,
	getUserById,
	postUser,
	putUser,
	deleteUser,
} from '../controllers/crudController';

router.get('/health', checkHealth);
router.get('/users', getUser);
router.get('/users/:id', getUserById);
router.post('/users', postUser);
router.put('/users/:id', putUser);
router.delete('/users/:id', deleteUser);

export default router;
