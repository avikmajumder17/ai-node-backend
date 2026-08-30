const About = require("../models/aboutModel");



exports.getAboutPage = async (req, res) => {
    const about = await About.find();

    try {
        res.status(200).json({
            status: "success",
            data: about
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};

exports.addAboutPage = async (req, res) => {
    const about = await About.findOneAndUpdate({}, req.body, {
        new: true,
        runValidators: true,
        upsert: true
    });

    try {
        res.status(200).json({
            status: "success",
            data: about
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};