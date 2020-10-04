const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({ 
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    name: String,
    content: String,
    taskStatus:{type: String, enum: ['in progress', 'completed', 'backlog'], default: 'backlog'},
},{timestamps: true})

const boardSchema = new Schema({
    featureId: {type: Schema.Types.ObjectId, ref: 'Feature'},
    backlog: {
        name: {type:String, default: 'backlog'},
        items: [taskSchema]
    },
    inProgress:{
          name: {type: String, default: 'in progress'},
          items: Array
    },
    completed:{
          name: {type: String, default: 'completed'},
          items: Array
    }
})

module.exports = mongoose.model('Board', boardSchema)