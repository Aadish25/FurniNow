import Url from "../url.js";

const billing = (data) =>
  Url({
    method: "POST",
    url: "/bill",
    data:data
  });

export default billing;
