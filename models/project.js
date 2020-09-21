const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({ 
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    name: String,
    content: String,
    taskStatus:{type: String, enum: ['In Progress', 'Completed', 'Backlog'], default: 'Backlog'},
    isEdit: {type: Boolean, default: false}
},{timestamps: true})

const featureSchema = new Schema({
    feature: String,
    description: String,
    featureStatus:{type: String, enum: ['In Progress', 'Completed', 'Backlog'], default: 'Backlog'},
    tasks: [taskSchema]
},{timestamps: true})

const commentSchema = new Schema({
    comment: String,
    createdBy: {type: Schema.Types.ObjectId, ref: 'User'}
},{timestamps: true})

const contributorSchema = new Schema({
    contributor: { type: Schema.Types.ObjectId, ref: 'User'},
    notes: String
},{timestamps: true})

const projectSchema = new Schema({
    name: String,
    owner:  { type: Schema.Types.ObjectId, ref: 'User'},
    features: [featureSchema],
    status:{type: Boolean, default: false},
    description: String,
    contributors: [contributorSchema],
    comments: [commentSchema],
    isEdit: {type: Boolean, default: false}

},{timestamps: true})


module.exports = mongoose.model('Project', projectSchema)