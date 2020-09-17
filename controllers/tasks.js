const Project = require('../models/project')

module.exports ={
    createTask
}

function createTask(req, res){
    Project.findById(req.params.projectId)
    .then(project =>{
        const idx = project.features.findIndex(feature => feature._id.equals(req.params.featureId))
        console.log(idx)
        project.features[idx].tasks.push(req.body)
        project.save().then(project =>
            res.json(project)
            )
    })
}