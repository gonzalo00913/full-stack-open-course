const blogRouter = require("express").Router();
const Blog = require("../models/blog")
const User = require("../models/user")

blogRouter.get("/", async (req, res) => {
  const blog = await Blog.findAll();
  res.json(blog);
});

blogRouter.post("/", async (req, res, next) => {
  try {
    const user = await User.findOne()
    const blog = await Blog.create({...req.body, userId: user.id});
    res.json(blog);
  } catch (error) {
    next(error)
  }
});

blogRouter.delete("/:id", async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    await blog.destroy();
    res.json({ message: "Eliminado correctamente" });
  } catch (error) {
    res.status(404).end();
  }
});

blogRouter.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  const nuevosLikes = req.body.likes;
 

  try {
    const blog = await Blog.findByPk(id);
   
    if (!blog) {
      return res.status(404).json({ error: "Blog no encontrado" });
    }
    
    await blog.update({ likes: nuevosLikes });
    return res.status(200).json({ message: "Likes actualizados exitosamente" });
    
  } catch (error) {
    next(error);
  }
});

module.exports = blogRouter;
