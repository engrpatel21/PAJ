const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

const AWS_KEY = process.env.AWSAccessKeyId
const SECRET_KEY = process.env.AWSSecretKey

aws.config.update({
    
    secretAccessKey: SECRET_KEY,
    accessKeyId: AWS_KEY,
    region: 'us-east-2' 
});
const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'paj-unit-3-project',
      acl: 'public-read',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: 'TESTING META DATA'});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
  })
  
  module.exports = upload;

