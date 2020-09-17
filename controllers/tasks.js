const Project = require('../models/project')

module.exports ={
    index,
    createTask,
    showTask
}

function showTask(req, res){
    Project.findById(req.params.projectId)
    .then(project =>{
        const featureIdx = project.features.findIndex(feature => feature._id.equals(req.params.featureId))
        console.log(featureIdx)
        const taskIdx = project.features[featureIdx].tasks.findIndex(task => task._id.equals(req.params.taskId))
        res.json(project.features[featureIdx].tasks[taskIdx])
    })
}

function index(req, res){
    Project.findById(req.params.projectId)
    .then(project =>{
        const idx = project.features.findIndex(feature => feature._id.equals(req.params.featureId))
        project.save().then(project =>
            res.json(project.features[idx].tasks)
            )
    })
}

function createTask(req, res){
    Project.findById(req.params.projectId)
    .then(project =>{
        const idx = project.features.findIndex(feature => feature._id.equals(req.params.featureId))
        project.features[idx].tasks.push(req.body)
        project.save().then(project =>
            res.json(project.features[idx].tasks)
            )
    })
}