const router = require('express').Router()
const contributorCtrl = require('../controllers/contributors')

router.post('/:projectId/contributors', contributorCtrl.createContributor)

module.exports = router