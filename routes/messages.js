const router = require('express').Router()
const messageCtrl = require('../controllers/messages')

router.post('/:userId/messages', messageCtrl.createMessage)

module.exports = router