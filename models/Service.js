import mongoose from "mongoose";
const schema = new mongoose.Schema({
  title: { type: String, required: [true, "Please enter Service Title"] },
  description: {
    type: String,
  },
});

export const Service = mongoose.model("Service", schema);
