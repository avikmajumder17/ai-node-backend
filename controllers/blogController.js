const Blog = require("../models/blogModel");



exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();

        res.status(200).json({
            status: "success",
            result: blogs.length,
            data: {
                blogs
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

exports.getBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data: {
                blog
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

exports.createBlog = async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body);

        res.status(201).json({
            status: "success",
            data: {
                blog: newBlog
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

exports.updateBlog = async (req, res) => {
    try {
        const newBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: "success",
            data: {
                blog: newBlog
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        Blog.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: "success",
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};