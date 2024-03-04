import mongoose from "mongoose";
import validator from "validator";
const schema = new mongoose.Schema({
  name: { type: String, required: [true, "Please enter your name"] },
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter your Email"],
    validate: validator.isEmail,
  },
});

export const User = mongoose.model("User", schema);
