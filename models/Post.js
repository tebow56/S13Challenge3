const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    body: String,
}, { timestamps: true });

const Task = mongoose.model('Post', PostSchema);

module.exports = Task;