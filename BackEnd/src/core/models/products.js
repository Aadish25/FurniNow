import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    title:{
        type:"String",
        // required:true,
    },
    category:{
        type:"String",
        // required:true,
    },
    description:{
        type:"String",
        // required:true,
    },
    cart:{
        type:"Boolean",
        // required:true,
    },
    rating:{
        type:"String",
        // required:true,
    },
    price:{
        type:"String",
        // required:true,
    },
    discount:{
        type:"String",
        // required:true,
    },
    newItem:{
        type:"Boolean",
        // required:true,
    },
    quantity:{
        type:"Number",
        // required:true,
    },
    image:{
        type:["String"],
        // required:true
    },
    size:{
        type:"String",
        enum:["L","XL","XS"],
        // required:true
    }
});
const product=mongoose.model("Products",productSchema);
export default product;