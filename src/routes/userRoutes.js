import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = Router();

// create = store

router.get('/', loginRequired, userController.index); // Não deveria existir
router.get('/:id', userController.show); // Não deveria existir

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
