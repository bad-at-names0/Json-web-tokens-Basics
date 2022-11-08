const { CustomAPIError } = require("../errors");

const errorHandleMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  console.log(err);
  res.status(500).json({ msg: `Something went wrong` });
};

module.exports = errorHandleMiddleware;
