import { Router } from 'express';
import imgController from '../controllers/ImgController';

const router = Router();

router.post('/', imgController.store);

export default router;
