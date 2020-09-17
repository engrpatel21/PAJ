const router = require('express').Router()
const projectCtrl = require('../controllers/projects')


router.get('/', projectCtrl.index)
router.post('/', projectCtrl.createProject)

module.exports = router