const express = require("express");
const cors = require("cors");
const path = require("path");

const homePageRouter = require(`${__dirname}/routes/homePageRoutes.js`);
const blogRouter = require(`${__dirname}/routes/blogRoutes.js`);
const aboutRouter = require(`${__dirname}/routes/aboutRoutes.js`);
const blogCategoryRouter = require(`${__dirname}/routes/blogCategoryRoutes.js`);

const app = express();

app.use(cors({
    origin: [
        // "http://localhost:5173",
        // "http://localhost:5174",
        "https://ai-vite-project.netlify.app",
        "https://ai-vite-admin.netlify.app"
    ]
}))

app.use(express.json());

app.use(
    "/uploads",
    express.static(path.join(__dirname, "uploads"))
);

app.use("/api/v1/homepage", homePageRouter);
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/blog_category", blogCategoryRouter);
app.use("/api/v1/aboutPage", aboutRouter);


module.exports = app;