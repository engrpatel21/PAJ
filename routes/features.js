const router = require('express').Router()
const featureCtrl = require('../controllers/features')



router.post('/:projectId/features', featureCtrl.createFeature)


module.exports = router