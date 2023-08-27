import jwt from "jsonwebtoken";
const config = process.env;

const verifyToken = (request, response, next) => {
  const token = request.headers["authorization"];
  if (!token) {
    return response.status(403).send("A token is required for authentication");
  }
  try {
    const { id } = jwt.verify(token, config.SECRET_KEY);
    if (id) {
      request.userId = id;
    }
  } catch (error) {
    return response.status(401).send("Invalid Token");
  }
  return next();
};
export default verifyToken;
