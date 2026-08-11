const mongoose = require("mongoose");



// sub schema start

const coreCapabilitySchema = new mongoose.Schema({
    icon: {
        type: String,
        required: [false, "A core capability must have an icon"]
    },
    title: {
        type: String,
        required: [false, "A core capability must have a title"]
    },
    description: {
        type: String,
        required: [false, "A core capability must have a description"]
    }
});

const codeIntegrationStepSchema = new mongoose.Schema({
    stepCount: {
        type: Number,
        required: [false, "A code integration step must have a step count"]
    },
    title: {
        type: String,
        required: [false, "A code integration step must have a title"]
    },
    description: {
        type: String,
        required: [false, "A code integration step must have a description"]
    }
});

const statsSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: [false, "A stats section must have a value"]
    },
    label: {
        type: String,
        required: [false, "A stats section must have a label"]
    }
});

// sub schema end


const homePageSchema = new mongoose.Schema({
    heroSubHeading: {
        type: String,
        required: [false, "A hero section must have a sub heading"]
    },
    heroHeading: {
        type: String,
        required: [false, "A hero section must have a heading"]
    },
    heroDescription: {
        type: String,
        required: [false, "A hero section must have a description"]
    },
    heroRatingLeft: {
        type: String,
        required: [false, "A hero section must have a rating"]
    },
    heroRatingRight: {
        type: String,
        required: [false, "A hero section must have trusted companies"]
    },
    coreSubHeading: {
        type: String,
        required: [false, "A core section must have a sub heading"]
    },
    coreHeading: {
        type: String,
        required: [false, "A core section must have a heading"]
    },
    coreCapabilities: {
        type: [coreCapabilitySchema],
        required: [false, "A core section must have a core capabilities"]
    },
    codeIntegrationSubHeading: {
        type: String,
        required: [false, "A code integration section must have a sub heading"]
    },
    codeIntegrationHeading: {
        type: String,
        required: [false, "A code integration section must have a heading"]
    },
    codeIntegrationDescription: {
        type: String,
        required: [false, "A code integration section must have a description"]
    },
    codeIntegrationSteps: {
        type: [codeIntegrationStepSchema],
        required: [false, "A code integration section must have a heading"]
    },
    codeIntegrationSample: String,
    stats: {
        type: [statsSchema],
        required: [false, "A stats section must have a stat"]
    },
    pricingSubHeading: {
        type: String,
        required: [false, "A pricing section must have a sub heading"]
    },
    pricingHeading: {
        type: String,
        required: [false, "A pricing section must have a heading"]
    },
    // pricingPlans: {
    //     type: [String],
    //     required: [false, "A pricing section must have a plan"]
    // }
});



const HomePage = mongoose.model("HomePage", homePageSchema);

module.exports = HomePage;