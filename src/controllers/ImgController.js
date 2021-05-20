import multer from 'multer';
import multerConfig from '../config/multer';
import Image from '../models/Image';

const upload = multer(multerConfig).single('image');

class ImgController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { aluno_id } = req.body;
        const { originalname, filename } = req.file;
        const image = await Image.create({ originalname, filename, aluno_id });

        return res.json(image);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe.'],
        });
      }
    });
  }
}

export default new ImgController();
