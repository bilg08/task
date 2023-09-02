import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: [1, "Title's length at least 1"],
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

CommentSchema.index({ taskId: 1 });
export const Comment = mongoose.model("Comment", CommentSchema);
