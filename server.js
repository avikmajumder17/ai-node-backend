const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");



let DB = process.env.DATABASE
    .replace("<db_username>", process.env.DATABASE_USER)
    .replace("<db_password>", process.env.DATABASE_PASSWORD);
    

mongoose
    .connect(DB, {
        dbName: "ai-vite-project",
        tls: true
    })
    .then(() => console.log("DB connection is established"))
    .catch(err => console.log("DB connection error", err));



const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`App running on Port: ${port}`);
});