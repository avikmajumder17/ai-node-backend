const express = require("express");
const cors = require("cors");

const homePageRouter = require(`${__dirname}/routes/homePageRoutes.js`);
const blogRouter = require(`${__dirname}/routes/blogRoutes.js`);

const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:5174"
    ]
}))

app.use(express.json());

app.use("/api/v1/homepage", homePageRouter);
app.use("/api/v1/blogs", blogRouter);


module.exports = app;