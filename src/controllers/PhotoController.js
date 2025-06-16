const multer = require('multer');
const multerConfig = require('../config/multer');
const Photo = require('../models/Photo');

const upload = multer(multerConfig).single('photo');
class PhotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
          console.log(err);
        return res.status(400).json({
          errors: [err.code],
        });
      }

      const { originalname, filename } = req.file;
      const foto = await Photo.create({ originalname, filename });

      return res.json(foto);
    });
  }
}

module.exports = new PhotoController();
