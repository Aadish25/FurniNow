import cart from "../../models/cart.js";
import product from "../../models/products.js";
const addToCart = async (request, response) => {
  try {
    const { userId } = request;
    const { productID, quantity = 1 } = request.body;
    let user = await cart.findOne({ userID: userId });
    // console.log(user.products);
    if (!user) {
      const newUser = new cart({
        userID: userId,
        products: {
          productID: productID,
          quantity: quantity,
        },
      });
      await newUser.save();
    } else {
      let isPresent = false;
      for (let i = 0; i < user.products.length; i++) {
        if (user.products[i].productID == productID) {
          if (quantity == 1) {
            user.products[i].quantity = quantity;
          } else {
            user.products[i].quantity = quantity;
          }

          await user.save();
          isPresent = true;
        }
      }
      if (isPresent == false) {
        user.products.push({ productID: productID, quantity: quantity });
        await user.save();
      }
    }
    return response.status(200).send({
      status: "success",
      message: "Added to Cart!!",
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      status: "failure",
      message: "Internal server error",
    });
  }
};
const editCart = async (request, response) => {
  try {
    const { userId } = request;
    const { productID,quantity=1 } = request.body;
    let user = await cart.findOne({ userID: userId });
    // console.log(user);
    for (let i = 0; i < user.products.length; i++) {
      if (user.products[i].productID == productID) {
        if (user.products[i].quantity > 1) {
          user.products[i].quantity-=quantity;
        } else if (user.products[i].quantity == 1) {
          const list = user.products;
          // console.log("list",list);
          // console.log("id",productID);
          const filtered = list.filter((a) => a.productID !== productID);
          // console.log("filter",filtered);
          await cart.findOneAndUpdate(
            { userID: userId },
            { products: filtered }
          );
        }

        await user.save();
      }
    }
    return response.status(200).send({
      status: "success",
      message: "Cart Updated!!",
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      status: "failure",
      message: "Internal server error",
    });
  }
};

const getCart = async (request, response) => {
  try {
    const { userId } = request;
    const list = await cart.find({ userID: userId });
    if (!list) {
      return response.status(404).send({
        status: "failure",
        message: "Cart is Empty!!",
      });
    }
    const cartList = [];
    async function getProduct(_id, quantity) {
      const found = await product.findById({ _id });
      cartList.push({ detail: found, number: quantity });
    }
    const getProductPromises = list[0].products.map((temp) =>
      getProduct(temp.productID, temp.quantity)
    );
    await Promise.all(getProductPromises);
    return response.status(200).send({
      status: "success",
      message: "Cart Items:-",
      data: cartList,
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      status: "failure",
      message: "Internal server error",
    });
  }
};
const deleteCart = async (request, response) => {
  try {
    const { userId } = request;
    const { productID } = request.body;
    const itemFound = await cart.findOne({ userID: userId });
    const list = itemFound.products;
    const filtered = list.filter((a) => a.productID !== productID);
    await cart.findOneAndUpdate({ userID: userId }, { products: filtered });
    return response.status(200).send({
      status: "success",
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      status: "failure",
      message: "Internal server error",
    });
  }
};
export default { addToCart, getCart, deleteCart, editCart };
