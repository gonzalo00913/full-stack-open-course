const userRouter = require("express").Router();
const User = require("../models/user");
const Blog = require("../models/blog");

userRouter.get("/", async (req, res) => {
  const users = await User.findAll({ include: { model: Blog } });
  res.json(users);
});

userRouter.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

userRouter.get("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).end();
  }
});

module.exports = userRouter;
