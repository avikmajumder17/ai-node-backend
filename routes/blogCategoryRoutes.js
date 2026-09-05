const express = require("express");

const blogCategoryController = require("../controllers/blogCategoryController");

const router = express.Router();



router
    .route("/")
    .get(blogCategoryController.getAllBlogCategory)
    .post(blogCategoryController.createBlogCategory)

router
    .route("/:id")
    .get(blogCategoryController.getABlogCategory)
    .patch(blogCategoryController.updateBlogCategory)
    .delete(blogCategoryController.deleteBlogCategory)


module.exports = router;