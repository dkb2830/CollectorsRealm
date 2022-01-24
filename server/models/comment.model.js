const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
    collectable:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Collectable",
    },
    collectable_comment: { type: String,
    required: [
        true,
        "Please enter your comment"
    ] },
}, { timestamps: true });
module.exports = mongoose.model('Comment', CommentSchema);

