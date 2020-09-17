const Project = require('../models/project')

module.exports = {
    index,
    createProject,
    showProject
}

function showProject(req, res){
    Project.findById(req.params.projectId)
    .populate('owner')
    .populate('comments.createdBy')
    .populate('features.tasks.user')
    .then( project => 
        res.json(project)
        )
}

function index(req,res){
    Project.find({})
    .populate('owner')
    .populate('comments.createdBy')
    .populate('features.tasks.user')
    .then(projects => res.json(projects))
    .catch(err => res.json(err))
}

function createProject(req,res){
    console.log(req.body)
    Project.create(req.body)
    .then(project => res.json(project))
    .catch(err => res.json(err))
}
