const Project = require('../models/project')

module.exports = {
    index,
    createFeature,
    showFeature,
    deleteFeature
}

function deleteFeature(req, res){
    Project.findById(req.params.projectId)
    .then(project => {
        const idx = project.features.findIndex(feature => feature._id.equals(req.params.featureId))
        project.features.splice(idx,1)
        project.save().then(project =>
            res.json(project.features)
            )
    })
}

function showFeature(req, res){
    Project.findById(req.params.projectId)
    .then(project => {
        const idx = project.features.findIndex(feature => feature._id.equals(req.params.featureId))
        res.json(project.features[idx])
    })
}

function index(req,res){
    Project.findById(req.params.projectId)
    .then(project =>
        res.json(project.features)
        )
}

function createFeature(req, res){
    Project.findById(req.params.projectId)
    .then(project => {
        console.log(project)
        project.features.push(req.body)
        project.save().then(project => 
            res.json(project)
        )
    })
}

