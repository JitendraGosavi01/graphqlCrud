import mongoose from "mongoose";
const Product = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  isAvailable: { type: Boolean },
  stores: { type: Array },
});

export default mongoose.model("Product", Product);
