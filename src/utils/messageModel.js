import mongoose from "mongoose";
// creating user schema
const Message = new mongoose.Schema(
  {
    topic: {
      type: String,
    },
    read: {
      type: Boolean,
      default: false,
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

let message;

try {
  message = mongoose.model("message");
} catch (e) {
  message = mongoose.model("message", Message);
}

export default message;
