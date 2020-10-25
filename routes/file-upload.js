const express = require("express");
const router = express.Router();
const upload = require('../services/file-upload');

const singleUpload = upload.single('image')

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.post('/image-upload', checkAuth, function(req, res) {
  singleUpload(req, res, function(err, some) {
    if (err) {
      return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}] });
    }

    return res.json({'imageUrl': req.file.location});
  });
})

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;