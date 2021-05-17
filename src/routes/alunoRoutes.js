import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

const router = Router();

router.get('/', alunoController.index);
router.get('/:id', alunoController.show);
router.post('/', alunoController.store);
router.put('/:id', alunoController.update);
router.delete('/:id', alunoController.delete);

export default router;
