const router = require('express').Router()
const taskCtrl = require('../controllers/tasks')

router.get('/:projectId/features/:featuresId/tasks', taskCtrl.index)
router.get('/:projectId/features/:featuresId/tasks/:taskId', taskCtrl.showTask)
router.post('/:projectId/features/:featureId/tasks', taskCtrl.createTask)


module.exports = router