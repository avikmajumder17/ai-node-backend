const mongoose = require("mongoose");



const BlogCategorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: [false, "A blog category must have a category"]
    }
});

const BlogCategory = mongoose.model("BlogCategory", BlogCategorySchema);

module.exports = BlogCategory;