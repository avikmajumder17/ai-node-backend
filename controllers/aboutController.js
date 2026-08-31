const About = require("../models/aboutModel");



exports.getAboutPage = async (req, res) => {
    try {
        const aboutPage = await About.findOne();

        res.status(200).json({
            status: "success",
            data: {
                aboutPage
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

exports.addAboutPage = async (req, res) => {
    try {
        const updatedAboutPage = await About.findOneAndUpdate(
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
                aboutPage: updatedAboutPage
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};