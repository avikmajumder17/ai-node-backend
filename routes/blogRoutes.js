const express = require("express");

const blogController = require(`${__dirname}/../controllers/blogController.js`);
const upload = require("../middleware/upload");

const router = express.Router();



router
    .route("/")
    .get(blogController.getAllBlogs)
    .post(
        upload.single("image"),
        blogController.createBlog
    );

router
    .route("/:id")
    .get(blogController.getBlog)
    .patch(
        upload.single("image"),
        blogController.updateBlog
    )
    .delete(blogController.deleteBlog);


    
module.exports = router;