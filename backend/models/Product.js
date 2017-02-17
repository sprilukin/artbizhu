const mongoose = require("mongoose");

const Product = new mongoose.Schema({
    name: String,
    description: String,
    category_id: Number,
    src: String,
    updated_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Product", Product);
