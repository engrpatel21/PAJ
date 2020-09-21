const router = require('express').Router()
const contributorCtrl = require('../controllers/contributors')

router.post('/:projectId/contributors', contributorCtrl.createContributor)
router.delete('/:projectId/contributors/:contributorId/:userId', contributorCtrl.deleteContributor)

module.exports = router