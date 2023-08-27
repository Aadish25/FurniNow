import Url from "../url.js";

const getCart = () =>
  Url({
    method: "GET",
    url: "/cart",
  });

export default getCart;
