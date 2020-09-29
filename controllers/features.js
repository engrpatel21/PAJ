const Feature = require('../models/feature')

module.exports = {
    index,
    createFeature,
    showFeature,
    deleteFeature,
    updateFeature
}



function updateFeature(req, res){
    Feature.findByIdAndUpdate(req.params.featureId, req.body, {new: true})
    .then(feature => res.json(feature))
}

function deleteFeature(req, res){
    Feature.findByIdAndDelete(req.params.featureId)
    .then((feature)=> res.status(200).json(feature))
}

function showFeature(req, res){
   Feature.findById(req.params.featureId)
   .then(feature => res.json(feature))
}

function index(req,res){
    Feature.find({project: req.params.projectId})
    .then(features => res.json(features))
}

function createFeature(req, res){
    req.body.project = req.params.projectId
    Feature.create(req.body)
    .then(feature => res.json(feature))
}


