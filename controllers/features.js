const Project = require('../models/project')

module.exports = {
    createFeature
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

