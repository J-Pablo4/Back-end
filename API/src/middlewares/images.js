const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix+'.'+file.originalname.split('.').pop());
    }
})
function fileFilter (req, file, cb) {

    const flag = file.mimetype.startsWith('image/');

    cb(null, flag)
  
}
const upload = multer({storage, fileFilter});

module.exports = upload;
