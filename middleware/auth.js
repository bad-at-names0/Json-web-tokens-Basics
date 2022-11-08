const { UnauthenticatedUser } = require("../errors");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const authHeaders = req.headers.authorization;
  if (!authHeaders || !authHeaders.startsWith("Bearer ")) {
    throw new UnauthenticatedUser(`No auth headers`);
  }

  const token = authHeaders.split(" ")[1];

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decode;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthenticatedUser(`Invalid auth header`);
  }
};

module.exports = authMiddleware;
