import contactModel from "../../models/contact.js";
import validators from "../Authentication/signup/validators.js";
const contact = async (request, response) => {
  try {
    const { name, email, subject, message } = request.body;
    if (!name) {
      return response.status(400).send({
        message: "Name is Required!!",
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
    if (!message) {
      return response.status(400).send({
        message: "Message is Required!!",
      });
    }
    const details = new contactModel({
      name,
      email,
      subject,
      message,
    });
    await details.save();
    return response.status(200).send({
      status: "success",
      message: "Thank You for your response!!",
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      status: "failure",
      message: "Internal server error",
    });
  }
};
export default { contact };
