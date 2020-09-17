const router = require('express').Router()
const commentCtrl = require('../controllers/comments')

router.get('/:projectId', commentCtrl.showComment)
router.post('/:projectId', commentCtrl.createComment)

module.exports = router