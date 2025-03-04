//require('dotenv').config({path: './env'});
import mongoose from "mongoose";
import dotenv from "dotenv";

import express from "express";


// import mongoose, { connect } from "mongoose";
// import { DB_NAME } from "./constants";  
import connectDB from "./db/index.js";

const app = express()


dotenv.config({
    path: './env'
});

// const app = express();
const port = process.env.PORT;

// Connect to DB and start the server
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error("Error:", error);
        process.exit(1);
    });













/*import express from "express";
const app = express();

( async ()  => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("Error", (error) => {
            console.log("Error: ",error);
            throw error
        })
        app.listen (process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    
    } catch (error) {
        console.log("Error: ",error)
        throw err
    }
})()
    */