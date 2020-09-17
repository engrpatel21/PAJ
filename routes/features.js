const router = require('express').Router()
const featureCtrl = require('../controllers/features')



router.post('/:projectId', featureCtrl.createFeature)


module.exports = router