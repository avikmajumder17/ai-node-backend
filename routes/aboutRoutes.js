const express = require("express");
const aboutController = require("../controllers/aboutController");

const routes = express.Router();


routes
    .route("/")    
    .get(aboutController.getAboutPage)
    .patch(aboutController.addAboutPage);

module.exports = routes;