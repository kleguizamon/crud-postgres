import { Router } from 'express';
const router = Router();

import { checkHealth } from '../controllers/healthController';
import { postUser, getUser, getUserById } from '../controllers/crudController';

router.get('/health', checkHealth);
router.get('/users', getUser);
router.get('/users/:id', getUserById);
router.post('/users', postUser);
router.put('/users/:id');
router.delete('/users/:id');

export default router;
