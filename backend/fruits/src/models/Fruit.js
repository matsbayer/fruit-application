import mongoose from "mongoose";

const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  origin: { type: String, required: true },
  sweet: { type: Boolean, required: true },
  img: { type: String, required: false },
});

export const Fruit = mongoose.model("Fruit", fruitSchema);
