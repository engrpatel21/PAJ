const router = require('express').Router()
const contributorCtrl = require('../controllers/contributors')

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.post('/:projectId/contributors', checkAuth, contributorCtrl.createContributor)
router.delete('/:projectId/contributors/:contributorId/:userId', checkAuth, contributorCtrl.deleteContributor)
router.put('/:projectId/contributors/:contributorId', checkAuth, contributorCtrl.updateContributor)

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router