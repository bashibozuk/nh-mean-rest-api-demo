const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {type: String, required: true},
    text: {type: String},
    visits: {type: Number, default: 0},
    createdAt: {type: Date, default: Date.now},
    authorId: {type: mongoose.Types.ObjectId},
    categoryId: {type: mongoose.Types.ObjectId}
});

module.exports = mongoose.model('Article', schema);