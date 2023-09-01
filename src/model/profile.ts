import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  tasks: {
    type: mongoose.Types.ObjectId,
    ref: "Task",
  },
});

export const Profile = mongoose.model("Profile", ProfileSchema);
