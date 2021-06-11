import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.get('/', alunoController.index);
router.get('/:id', alunoController.show);
router.post('/', alunoController.store);
router.put('/:id/edit', loginRequired, alunoController.update);
router.delete('/:id/delete', loginRequired, alunoController.delete);

export default router;
