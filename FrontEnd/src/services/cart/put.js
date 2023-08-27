import Url from "../url.js";

const editCart = (data) =>
  Url({
    method: "PUT",
    url: "/cart",
    data:data
  });

export default editCart;
