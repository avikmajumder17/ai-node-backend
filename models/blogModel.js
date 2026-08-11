const mongoose = require("mongoose");



const blogSchema = new mongoose.Schema({
    image: {
        type: String,
        required: [true, "A blog must have an image"]
    },
    blogCategory: {
        type: String,
        required: [true, "A blog must have a category"]
    },
    blogTitle: {
        type: String,
        required: [true, "A blog must have a title"]
    },
    blogPostDate: {
        type: Date,
        default: new Date,
        required: [true, "A blog must have a post date"]
    },
    blogDescription: {
        type: String,
        required: [true, "A blog must have a description"]
    },
    blogKeyTakeways: {
        type: [String],
        required: [true, " A blog must have a category"]
    }
});



const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;