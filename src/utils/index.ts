import mongoose from "mongoose";
import { Response } from "express";
import { Profile, Task } from "../model";

const models = {
  Profile: Profile,
  Task: Task,
};
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongodb_uri as string);
    console.log("Connect to db");
  } catch (error) {
    console.log("Error in connectDB");
  }
};

export const response = (success: boolean, res: Response, data?: any) => {
  return res.json({
    success,
    ...(data && { data }),
  });
};

export const convertStringToMongoObjectId = (id: string) =>
  new mongoose.Types.ObjectId(id);
