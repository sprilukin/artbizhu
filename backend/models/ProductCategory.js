const mongoose = require("mongoose");

const ProductCategory = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    images: [
        {
            _id: false,
            uri: String
        }
    ],
    updated_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("ProductCategory", ProductCategory);
