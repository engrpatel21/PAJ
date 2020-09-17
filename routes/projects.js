const router = require('express').Router()
const projectCtrl = require('../controllers/projects')


router.get('/', projectCtrl.index)
router.get('/:projectId', projectCtrl.showProject)
router.post('/', projectCtrl.createProject)
router.delete('/:projectId', projectCtrl.deleteProject)
router.put('/:projectId', projectCtrl.updateProject)

module.exports = router