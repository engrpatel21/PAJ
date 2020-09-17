const User = require("../models/user");

module.exports = {
  index,
  updateUser,
};

function updateUser(req, res){
  User.findByIdAndUpdate(req.params.userId, req.body)
  .then(user => 
    res.json(user)
    )
}

function index(req, res) {
  User.find({})
  .populate('projects')
  .then((users) => res.json(users));
}