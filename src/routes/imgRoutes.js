import { Router } from 'express';
import multer from 'multer';
import imgController from '../controllers/ImgController';
import multerConfig from '../config/multer';

const upload = multer(multerConfig);

const router = Router();

router.post('/', upload.single('image'), imgController.store);

export default router;
