import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongodb_uri as string);
    console.log("Connect to db");
  } catch (error) {
    console.log("Error in connectDB");
  }
};
