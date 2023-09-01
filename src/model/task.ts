import mongoose from "mongoose";
import { TaskTypes } from "../typings";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  about: {
    type: String,
    required: [true, "About is required"],
  },
  status: {
    type: String,
    required: true,
    enum: TaskTypes,
    default: TaskTypes.TODO,
  },
  assignedTo: {
    type: mongoose.Types.ObjectId,
    ref: "Profile",
  },
  comments: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Task",
      default: [],
    },
  ],
});

export const Task = mongoose.model("Task", TaskSchema);
