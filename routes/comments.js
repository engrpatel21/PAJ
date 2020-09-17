const router = require('express').Router()
const commentCtrl = require('../controllers/comments')

router.get('/:projectId/comments', commentCtrl.index)
router.post('/:projectId/comments', commentCtrl.createComment)
router.delete('/:projectId/comments/:commentId', commentCtrl.deleteComment)
router.put('/:projectId/comments/:commentId', commentCtrl.updateComment)

module.exports = router