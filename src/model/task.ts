import mongoose from "mongoose";
import { TaskTypes } from "../typings";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
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
      ref: "Comment",
      default: [],
    },
  ],
});
TaskSchema.index({ status: 1 });
TaskSchema.index({ assignedTo: 1 });
export const Task = mongoose.model("Task", TaskSchema);
