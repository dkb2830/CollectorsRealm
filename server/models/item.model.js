const mongoose = require('mongoose');
const CollectableSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('Collectable', CollectableSchema);

