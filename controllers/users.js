const User = require("../models/user");

module.exports = {
  index,
  updateUser,
  showUserProject
};

function showUserProject(req, res){
  User.findById(req.user._id)
  .populate('projects')
  .then(user => 
    res.json(user.projects)
    )
}

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