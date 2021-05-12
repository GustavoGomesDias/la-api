import { Router } from 'express';
import userController from '../controllers/UserController';

const router = Router();

// create = store

router.post('/', userController.store);

export default router;
