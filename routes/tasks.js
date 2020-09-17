const router = require('express').Router()
const taskCtrl = require('../controllers/tasks')

router.post('/:projectId/features/:featureId/tasks', taskCtrl.createTask)


module.exports = router