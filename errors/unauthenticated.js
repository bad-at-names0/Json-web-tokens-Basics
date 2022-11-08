const CustomAPIError = require("./custom-error");

class UnauthenticatedUser extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = UnauthenticatedUser;
