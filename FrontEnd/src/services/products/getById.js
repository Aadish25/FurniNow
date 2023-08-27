import Url from "../url.js";

const getProductById = (_id) =>
  Url({
    method: "GET",
    url: `/product/${_id}`,
  });

export default getProductById;
