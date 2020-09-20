const Project = require('../models/project')
const User = require('../models/user')

module.exports ={
    createContributor,
    deleteContributor
}

function deleteContributor(req, res){
    Project.findById(req.params.projectId)
    .then(project => {
        const idx = project.contributors.findIndex(c => c._id.equals(req.params.contributorId))
        project.contributors.splice(idx,1)
        project.save().then(()=>
        res.json(project))
    })
}

async function createContributor(req, res){
    const contributor = await User.findOne({ email: req.body.contributor });
    if(contributor){
        req.body.contributor = contributor._id
        Project.findById(req.params.projectId)
        .populate('contributors.contributor')
        .then(project =>{
            const idx = project.contributors.findIndex(c => c.contributor._id.equals(contributor._id))
            console.log(idx)
            if(idx === -1){
                project.contributors.push(req.body)
                project.save().then(() =>{
                        contributor.projects.push(project._id)
                        console.log(contributor)
                        contributor.save().then(()=>
                            res.json(project)
                        )
                })
            }else{
                res.json(project)
            }
     
        })
    }else{
    Project.findById(req.params.projectId)
    .then(project =>
        res.json(project)
        )
    }
}