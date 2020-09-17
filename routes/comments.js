const router = require('express').Router()
const commentCtrl = require('../controllers/comments')

router.post('/:projectId', commentCtrl.createComment)

module.exports = router