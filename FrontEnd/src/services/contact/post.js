import Url from "../url.js";

const contact = (data) =>
  Url({
    method: "POST",
    url: "/contact",
    data:data
  });

export default contact;
