require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const errorHandleMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");
const mainRouter = require("./routers/jwt");

//middleware
// app.use(express.static('./public'))
app.use(express.json());

//router
app.use("/api/v1/jwt", mainRouter);
app.use(errorHandleMiddleware);
app.use(notFound);

//connect Db and start
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    // await connectDB()/
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
