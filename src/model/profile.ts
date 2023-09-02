import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is requires"],
    unique: true,
  },
  tasks: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Task",
    },
  ],
});

export const Profile = mongoose.model("Profile", ProfileSchema);
