import Url from "../url.js";

const deleteItem = (data) =>
  Url({
    method: "DELETE",
    url: "/cart",
    data:data
  });

export default deleteItem;
