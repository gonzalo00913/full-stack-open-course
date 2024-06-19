const express = require("express");
const app = express();
const middleware = require("./util/middleware")

const { PORT } = require("./util/config");
const { connectToDatabase } = require("./util/db");

const blogRouter = require("./controllers/blogs");
const userRouter = require("./controllers/user")
const loginRouter = require("./controllers/login")

app.use(express.json());

app.use("/api/blog", blogRouter);
app.use("/api/user", userRouter);
app.use("/api/login", loginRouter);

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
