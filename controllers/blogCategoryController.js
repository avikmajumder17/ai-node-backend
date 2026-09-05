const BlogCategory = require("../models/blogCategoryModel");



exports.getAllBlogCategory = async (req, res) => {
    try {
        const blogCategory = await BlogCategory.find();

        res.status(200).json({
            status: "success",
            data: {
                blogCategory
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        });
    }
};

exports.getABlogCategory = async (req, res) => {
    try {
        const blogCategory = await BlogCategory.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data: {
                blogCategory
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        });
    }
};

exports.createBlogCategory = async (req, res) => {
    try {
        const newBlogCategory = await BlogCategory.create(req.body);

        res.status(202).json({
            status: "success",
            data: {
                blogCategory: newBlogCategory
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        });
    }
};

exports.updateBlogCategory = async (req, res) => {
    try {
        const blogCategory = await BlogCategory.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: "success",
            data: {
                blogCategory
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        });
    }
};

exports.deleteBlogCategory = async (req, res) => {
    try {
        await BlogCategory.fildByIdAndDelete(req.params.id);

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