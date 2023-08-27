import billingModel from "../../models/billing.js";
import Validators from "./validators.js";
import validators from "../Authentication/signup/validators.js";
const details = async (request, response) => {
  try {
    const {
      firstName,
      lastName,
      country,
      address,
      city,
      pinCode,
      phone,
      email,
      info,
    } = request.body;
    if (!firstName) {
      return response.status(400).send({
        message: "First Name is Required!!",
      });
    }
    if (!lastName) {
      return response.status(400).send({
        message: "Last Name is Required!!",
      });
    }
    if (!country) {
      return response.status(400).send({
        message: "Country is Required!!",
      });
    }
    if (!address) {
      return response.status(400).send({
        message: "address is Required!!",
      });
    }
    if (!city) {
      return response.status(400).send({
        message: "City is Required!!",
      });
    }
    if (!pinCode) {
      return response.status(400).send({
        message: "Pin Code is Required!!",
      });
    }
    if (Validators.ValidatePin(pinCode) == false) {
      return response.status(400).send({
        message: "Enter Valid Pin Code!!",
      });
    }
    if (!phone) {
      return response.status(400).send({
        message: "Phone Number is Required!!",
      });
    }
    if (Validators.ValidatePhone(phone) == false) {
      return response.status(400).send({
        message: "Enter Valid Phone Number!!",
      });
    }
    if (!email) {
      return response.status(400).send({
        message: "Email is Required!!",
      });
    }
    if (validators.ValidateEmail(email) == false) {
      return response.status(400).send({
        message: "Enter Valid Email Address!!",
      });
    }
    const bill = new billingModel({
      firstName,
      lastName,
      country,
      address,
      city,
      pinCode,
      phone,
      email,
      info,
    });
    await bill.save();
    return response.status(200).send({
      status: "success",
      message: "Order Placed Successfully!!",
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      status: "failure",
      message: "Internal server error",
    });
  }
};
export default { details };
