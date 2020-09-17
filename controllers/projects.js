const Project = require('../models/project')

module.exports = {
    index,
    createProject
}

function index(req,res){
    Project.find({})
    .then(projects => res.json(projects))
    .catch(err => res.json(err))
}

function createProject(req,res){
    console.log(req.body)
    Project.create(req.body)
    .then(project => res.json(project))
    .catch(err => res.json(err))
}
