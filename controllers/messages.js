const User = require('../models/user')

module.exports ={
    createMessage
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