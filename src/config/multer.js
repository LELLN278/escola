const multer = require ('multer')
const { extname, resolve } = require('path')

const randomNum = () => Math.floor(Math.random() * 10000 + 10000)

module.exports = {
  storage: multer.diskStorage({
    destination:(req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename:(req, file, cb) => {
      cb(null, `${Date.now}_${randomNum()}${extname(file.originalname)}`);
    },
  }),
};
