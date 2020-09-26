const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contributorSchema = new Schema({
    contributor: { type: Schema.Types.ObjectId, ref: 'User'},
    notes: String,
    isAdmin: {type: Boolean, default: false},
},{timestamps: true})

module.exports = module.exports = mongoose.model('Contributor', contributorSchema)