const User = require('../models/user')

module.exports ={
    index,
    createMessage
}

function index(req, res){
    User.findById(req.params.userId)
    .populate('createdBy')
    .then(user => 
        res.json(user.messages)
        )
}

function createMessage(req, res){
    User.findById(req.params.userId)
    .then(user => {
        user.messages.push(req.body)
        user.save().then(user => 
            res.json(user)
            )
    })
}