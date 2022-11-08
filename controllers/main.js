const { BadRequest } = require("../errors");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequest(`Please enter username and password`);
  }

  const id = new Date().getFullYear();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(201).json({
    msg: `Created token`,
    token,
  });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello ${req.user.username}`,
    secret: `Your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
