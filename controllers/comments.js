const Project = require('../models/project')

module.exports = {
    createComment,    
    showComment,
}

function showComment(req,res){
    Project.findById(req.params.projectId)
    .populate('comments.createdBy')
    .then(project =>
        res.json(project.comments)
        )
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

