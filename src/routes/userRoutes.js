import { Router } from 'express';
import userController from '../controllers/UserController';

const router = Router();

// create = store

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);

export default router;
