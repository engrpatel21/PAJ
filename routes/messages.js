const router = require('express').Router()
const messageCtrl = require('../controllers/messages')

router.get('/:userId/messages', messageCtrl.index)
router.post('/:userId/messages', messageCtrl.createMessage)
router.delete('/:userId/messages/:messageId', messageCtrl.deleteMessage)

module.exports = router