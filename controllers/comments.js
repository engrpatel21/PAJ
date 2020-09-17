const Project = require('../models/project')

module.exports = {
    createComment    
}

function createComment(req, res){
    Project.findById(req.params.projectId)
    .then(project =>{
        console.log(project)
        project.comments.push(req.body)
        project.save().then( project =>
            res.json(project)
            )
    })
}

