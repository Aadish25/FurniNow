import mongoose from "mongoose";
const billingSchema=new mongoose.Schema({
    firstName:{
        type:"String",
        required:true
    },
    lastName:{
        type:"String",
        required:true
    },
    country:{
        type:"String",
        required:true
    },
    address:{
        type:"String",
        required:true
    },
    city:{
        type:"String",
        required:true
    },
    pinCode:{
        type:"String",
        required:true
    },
    phone:{
        type:"String",
        required:true
    },
    email:{
        type:"String",
        required:true
    },
    info:{
        type:"String",
    },
});
const billingModel= mongoose.model("billing_details",billingSchema);
export default billingModel;