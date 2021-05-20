import { Router } from 'express';
import imgController from '../controllers/ImgController';
import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.post('/', loginRequired, imgController.store);

export default router;
