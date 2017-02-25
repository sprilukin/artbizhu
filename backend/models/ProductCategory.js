const mongoose = require("mongoose");

const ProductCategory = new mongoose.Schema({
    name: String,
    description: String,
    updated_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("ProductCategory", ProductCategory);
