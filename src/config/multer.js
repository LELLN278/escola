const multer = require ('multer')
const { extname, resolve } = require('path')

const randomNum = () => Math.floor(Math.random() * 10000 + 10000)

module.exports = {
  fileFilter: (req, file, cb) => {
    if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG'))
    }
    return cb(null, true)
  },

  storage: multer.diskStorage({
    destination:(req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${randomNum()}${extname(file.originalname)}`);
  },
  }),
};
