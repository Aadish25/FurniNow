import Url from "../url.js";

const addToCart = (data) =>
  Url({
    method: "POST",
    url: "/cart",
    data:data
  });

export default addToCart;
