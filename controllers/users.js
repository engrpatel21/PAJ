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
  console.log("req.user", req.user);
  User.find({}).then((users) => res.json(users));
}