const mongoose = require('mongoose');
const CollectableSchema = new mongoose.Schema({
    name: { type: String,
    required: [
        true,
        "Name is required"
    ] },
    description: { type: String,
    required: [
        true,
        "Description is required"
    ] },
    comment:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    },

}, { timestamps: true });
module.exports = mongoose.model('Collectable', CollectableSchema);

