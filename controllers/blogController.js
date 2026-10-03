const Blog = require("../models/blogModel");
const cloudinary = require("../cloudinary");
const uploadToCloudinary = require("../utils/uploadToCloudinary");



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
            message: err.message
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
            message: err.message
        });
    }
};

exports.createBlog = async (req, res) => {
    try {        
        if (!req.file) {
            return res.status(400).json({
                status: "fail",
                message: "Image is required"
            });
        }

        const result = await uploadToCloudinary(req.file.buffer, "blogs");

        const newBlog = await Blog.create({
            ...req.body,
            blogKeyTakeways: JSON.parse(req.body.blogKeyTakeways),
            image: result.secure_url,
            imagePublicId: result.public_id
        });

        res.status(201).json({
            status: "success",
            data: {
                blog: newBlog
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        });
    }
};

exports.updateBlog = async (req, res) => {
    try {
        const oldBlog = await Blog.findById(req.params.id);

        const result = await uploadToCloudinary(req.file.buffer, "blogs");

        const newBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
                blogKeyTakeways: JSON.parse(req.body.blogKeyTakeways),
                image: result.secure_url,
                imagePublicId: result.public_id
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (oldBlog && oldBlog.imagePublicId) {
            await cloudinary.uploader.destroy(oldBlog.imagePublicId);
        }

        res.status(200).json({
            status: "success",
            data: {
                blog: newBlog
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        });
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (blog && blog.imagePublicId) {
            await cloudinary.uploader.destroy(blog.imagePublicId);
        }

        await Blog.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: "success",
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        });
    }
};