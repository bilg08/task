import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  taskId: {
    type: mongoose.Types.ObjectId,
    ref: "task",
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

export const Comment = mongoose.model("Comment", CommentSchema);
