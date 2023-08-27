import mongoose from "mongoose";
const cartSchema = new mongoose.Schema({
  userID: {
    type: "String",
    required: true,
  },
  products: [
    {
      productID: {
        type: "String",
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});
const cartModel = mongoose.model("cart", cartSchema);
export default cartModel;
