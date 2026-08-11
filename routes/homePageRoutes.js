const express = require("express");
const homePageController = require(`${__dirname}/../controllers/homePageController.js`);

const router = express.Router();



router
    .route("/")
    .get(homePageController.getHomePage)
    .patch(homePageController.updateHomePage);


    
module.exports = router;