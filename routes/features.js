const router = require('express').Router()
const featureCtrl = require('../controllers/features')


router.get('/:projectId/features', featureCtrl.showFeature)
router.post('/:projectId/features', featureCtrl.createFeature)


module.exports = router