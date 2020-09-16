const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({ 
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    name: String,
    content: String,
    taskStatus:{type: String, enum: ['In Progress', 'Completed', 'Backlog']}
})

const projectSchema = new Schema({
    owner:  { type: Schema.Types.ObjectId, ref: 'User'},
    features: [featureSchema],
    status:{type: Boolean, default: false},
    description: String,
    contributors: [{ type: Schema.Types.ObjectId, ref: 'User'}]

})

