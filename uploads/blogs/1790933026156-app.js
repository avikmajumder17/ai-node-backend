const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const aboutRouters = require("./routes/routes");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DB_PASSWORD);

mongoose
    .connect(DB, {
        dbName: "ai-vite"
    })
    .then(
        () => console.log("Database connection successful")
    )
    .catch(
        (err) => console.log(`Database connection error: ${err}`)
    )

app.use("/api/v1/aboutPage", aboutRouters);

module.exports = app;