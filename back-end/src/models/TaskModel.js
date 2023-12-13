const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    email: { type: String },
    title: { type: String },
    description: { type: String },
    status: { type: String }
}, {timestamps:true, versionKey: false });
// when we use timestamps that will help us to check created time and updated time on database

const TaskModel = mongoose.model('tasks', DataSchema);
module.exports = TaskModel;
