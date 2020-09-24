const User = require("../models/user");

module.exports = {
  index,
  updateUser,
  showUserProject,
  showOneUser,
  getAllUserProjects
};

function showOneUser(req, res){
  User.findById(req.params.userId)
  .populate('projects')
  .then(user => 
    res.json(user)
    )
}

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

// Added for User's Profile Page.
function getAllUserProjects(req, res){
  User.findById(req.params.userId)
  .populate('projects')
  .then(user => 
    res.json(user.projects)
    )
}
