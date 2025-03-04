import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// import dotenv from "dotenv";

// dotenv.config();

// const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected !! DB HOST: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MONGODB connection failed:", error);
        process.exit(1);
    }
};

export default connectDB;
