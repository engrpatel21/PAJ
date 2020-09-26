const Feature= require('../models/feature')

module.exports ={
    index,
    createTask,
    showTask,
    deleteTask,
    updateTask
}

function updateTask(req, res){
    Feature.findById(req.params.featureId)
    .then(feature =>{
        const idx = feature.tasks.findIndex(t => t._id.params.equals(req.params.taskId))
        feature.tasks.splice(idx, 1, req.body)
    })
}

function deleteTask(req, res){
    Feature.findById(req.params.featureId)
    .then(feature =>{
        const idx = feature.tasks.findIndex(t => t._id.equals(req.params.taskId))
        feature.tasks.splice(idx, 1)
        feature.save().then(feature => res.status(200))
    })
}

function showTask(req, res){
   Feature.findById(req.params.featureId)
   .then(feature =>{
       const idx = feature.tasks.findIndex(t => t._id.equals(req.params.taskId))
       res.json(feature.tasks[idx])
   })
}

function index(req, res){
    Feature.findById(req.params.featureid)
    .then(feature => res.json(feature.tasks))
}


function createTask(req, res){
    Feature.findById(req.params.featureId)
    .then(feature => {    
        feature.tasks.push(req.body)
        feature.save().then(feature =>
            res.json(feature.tasks[feature.tasks.length-1]))}
        )
}

