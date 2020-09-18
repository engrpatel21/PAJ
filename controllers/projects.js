const Project = require('../models/project')
const User = require('../models/user')

module.exports = {
    index,
    createProject,
    showProject,
    deleteProject,
    updateProject
}

async function updateProject(req, res){
    const contributor = await User.findOne({ email: req.body.contributor });
    if(contributor){
        Project.findByIdAndUpdate(req.params.projectId, req.body, {new: true})
        .then(project =>{
        contributor.projects.push(project._id)
        contributor.save().then(()=>
            res.json(project)
        )
    })
    }else{
        Project.findByIdAndUpdate(req.params.projectId, req.body, {new: true})
        .then(project =>
            res.json(project)
            )
    }
}

function deleteProject(req,res){
    Project.findByIdAndDelete(req.params.projectId)
    .then(project =>
        res.json(project)
        )
}

function showProject(req, res){
    console.log(req.params.projectId)
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
    req.body.owner = req.user._id
    Project.create(req.body)
    .then(project => {
        User.findById(req.user._id)
        .then(user =>{
            user.projects.push(project._id)
            user.save().then(() =>
                res.json(project)
                )
        })
    })
    .catch(err => res.json(err))
}

