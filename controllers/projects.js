const Project = require('../models/project')

module.exports = {
    index,
    createProject
}

function index(res,req){
    Project.find({})
    .then(projects => res.json(projects))
    .catch(err => res.json(err))
}

function createProject(res,req){
    Project.create(req.body)
    .then(project => res.json(project))
    .then(err => res.status(500).json(err))
}
