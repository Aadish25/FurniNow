import { request, response } from "express";
import product from "../../models/products.js";
const createProduct = async (request, response) => {
  try {
    const {
      title,
      category,
      description,
      cart,
      rating,
      price,
      discount,
      newItem,
      quantity,
      image,
      size
    } = request.body;
    const List = new product({
      title,
      category,
      description,
      cart,
      rating,
      price,
      discount,
      newItem,
      quantity,
      image,
      size
    });
    await List.save();
    return response.status(200).send({
      status: "success",
      message: "Product Added Successfully!!",
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      status: "failure",
      message: "Internal server error",
    });
  }
};
const editProduct = async (request, response) => {
  try {
    const { _id } = request.params;
    const {
      title,
      category,
      description,
      cart,
      rating,
      price,
      discount,
      newItem,
      quantity,
      image,
      size
    } = request.body;
    const itemFound = await product.findByIdAndUpdate(
      { _id },
      {
        title,
        category,
        description,
        cart,
        rating,
        price,
        discount,
        newItem,
        quantity,
        image,
        size
      }
    );
    if (!itemFound) {
      return response.status(404).send({
        status: "Failure",
        message: `Product can't find at ${_id}!!`,
      });
    }
    await itemFound.save();
    const updatedItem=await product.findById({_id});
    return response.status(200).send({
      status: "success",
      message: `Product Edited Successfully at ${_id}`,
      data: updatedItem,
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      status: "failure",
      message: "Internal server error",
    });
  }
};
const deleteProduct = async (request, response) => {
  try {
    const { _id } = request.params;
    const itemFound = await product.findByIdAndRemove({ _id });
    if (!itemFound) {
      return response.status(404).send({
        status: "Failure",
        message: `Product can't find at ${_id}!!`,
      });
    }
    return response.status(200).send({
      status: "success",
      message: "Product Deleted Successfully",
      data: itemFound,
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      status: "failure",
      message: "Internal server error",
    });
  }
};
const getProducts = async (request, response) => {
  try {
    const itemFound = await product.find({});
    if (!itemFound) {
      return response.status(404).send({
        status: "Failure",
        message: "No Products to show!!",
      });
    }
    return response.status(200).send({
      status: "success",
      message: "Showing All Available Products",
      data: itemFound,
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      status: "failure",
      message: "Internal server error",
    });
  }
};
const getProduct = async (request, response) => {
  try {
    const { _id } = request.params;
    // console.log(_id);
    const itemFound = await product.findById({ _id });
    if (!itemFound) {
      return response.status(404).send({
        status: "Failure",
        message: `Product not found at ${_id}!!`,
      });
    }
    return response.status(200).send({
      status: "success",
      message: `Product at ${_id}`,
      data: itemFound,
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      status: "failure",
      message: "Internal server error",
    });
  }
};
export default {createProduct,editProduct,deleteProduct,getProduct,getProducts};
