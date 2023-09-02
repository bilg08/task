import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: [1, "Title's length at least 1"],
  },
  taskId: {
    type: mongoose.Types.ObjectId,
    ref: "Task",
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "Profile",
    required: true,
  },
});

CommentSchema.index({ taskId: 1 });
export const Comment = mongoose.model("Comment", CommentSchema);
