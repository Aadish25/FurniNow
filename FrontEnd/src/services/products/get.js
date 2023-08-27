import Url from "../url.js";

const getProduct = () =>
  Url({
    method: "GET",
    url: "/products",
  });

export default getProduct;
