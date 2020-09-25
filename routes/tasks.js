const router = require('express').Router()
const taskCtrl = require('../controllers/tasks')

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.get('/:projectId/features/:featureId/tasks', checkAuth, taskCtrl.index)
router.get('/:projectId/features/:featureId/tasks/:taskId', checkAuth, taskCtrl.showTask)
router.post('/:projectId/features/:featureId/tasks', checkAuth, taskCtrl.createTask)
router.delete('/:projectId/features/:featureId/tasks/:taskId', checkAuth, taskCtrl.deleteTask)
router.put('/:projectId/features/:featureId/tasks/:taskId', checkAuth, taskCtrl.updateTask)

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router