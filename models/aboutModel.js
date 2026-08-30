const mongoose = require("mongoose");



const whoWeAreCardsSchema = new mongoose.Schema({
    icon: {
        type: String,
        required: [true, "A who we are card must have an icon"]
    },
    title: {
        type: String,
        required: [true, "A who we are card must have a title"]
    }
});

const whatWeDoCardsSchema = new mongoose.Schema({
    icon: {
        type: String,
        required: [true, "A what we do section must have an icon"]
    },
    title: {
        type: String,
        required: [true, "A what we do section must have a title"]
    },
    description: {
        type: String,
        required: [true, "A what we do section must have a description"]
    }
});

const ourMissionStatsSchema = new mongoose.Schema({
    stat: {
        type: String,
        required: [true, "An our mission section must have a stat"]
    },
    label: {
        type: String,
        required: [true, "An our mission section must have a label"]
    }
});


const aboutSchema = new mongoose.Schema({
    heroSubHeading: {
        type: String,
        required: [true, "A hero section must have a sub heading"]
    },
    heroHeading: {
        type: String,
        required: [true, "A hero section must have a heading"]
    },
    heroDescription: {
        type: String,
        required: [true, "A hero section must have a description"]
    },
    heroImage: {
        type: String,
        required: [true, "A hero section must have an image"]
    },
    whoWeAreSubHeading: {
        type: String,
        required: [true, "A who we are section must have a sub heading"]
    },
    whoWeAreHeading: {
        type: String,
        required: [true, "A who we are section must have a heading"]
    },
    whoWeAreDescription: {
        type: String,
        required: [true, "A who we are section must have a description"]
    },
    whoWeAreCards: {
        type: [whoWeAreCardsSchema],
        required: [true, "A who we are section must have cards"]
    },
    whatWeDoSubHeading: {
        type: String,
        required: [true, "A what we do section must have a sub heading"]
    },
    whatWeDoHeading: {
        type: String,
        required: [true, "A what we do section must have a heading"]
    },
    whatWeDoDescription: {
        type: String,
        required: [true, "A what we do section must have a description"]
    },
    whatWeDoCards: {
        type: [whatWeDoCardsSchema],
        required: [true, "A what we do section must have cards"]
    },
    ourMissionSubHeading: {
        type: String,
        required: [true, "An our mission section must have a sub heading"]
    },
    ourMissionHeading: {
        type: String,
        required: [true, "An our mission section must have a heading"]
    },
    ourMissionDescription: {
        type: String,
        required: [true, "An our mission section must have a description"]
    },
    ourMissionStats: {
        type: [ourMissionStatsSchema],
        required: [true, "An our mission section must have a stat"]
    },
});

const About = mongoose.model("About", aboutSchema);

module.exports = About;