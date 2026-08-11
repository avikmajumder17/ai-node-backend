const HomePage = require("../models/homePageModel");



exports.getHomePage = async (req, res) => {
    try {
        const homePage = await HomePage.findOne();

        res.status(200).json({
            status: "success",
            data: {
                homePage
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};



exports.updateHomePage = async (req, res) => {
    try {
        const updatedHomePage = await HomePage.findOneAndUpdate(
            {},
            req.body,
            {
                new: true,
                upsert: true
            }
        );

        res.status(200).json({
            status: "success",
            data: {
                homePage: updatedHomePage
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};