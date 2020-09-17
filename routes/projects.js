const router = require('express').Router()
const projectCtrl = require('../controllers/projects')

router.use(require("../config/auth"));

router.get('/', projectCtrl.index)
router.get('/:projectId', projectCtrl.showProject)
router.post('/', checkAuth, projectCtrl.createProject)
router.delete('/:projectId', projectCtrl.deleteProject)
router.put('/:projectId', projectCtrl.updateProject)

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }
  

module.exports = router