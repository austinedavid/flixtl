import mongoose from "mongoose";
// creating user schema
const user = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    isadmin: {
      type: Boolean,
      require: true,
      default: false,
    },
    origin: {
      type: String,
      require: true,
    },
    isactive: {
      type: Boolean,
      default: true,
      require: true,
    },
  },
  { timestamps: true }
);
// removed the try and catch block and replaced it with this
export default mongoose.models.USER || mongoose.model("USER", user);
