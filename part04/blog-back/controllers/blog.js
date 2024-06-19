const jwt = require('jsonwebtoken')
const blogRouter = require("express").Router();
const Blog = require("../models/blog");
const User = require("../models/user")

blogRouter.get("/", async (request, response) => {
  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET);
    console.log('Decoded token:', decodedToken);
    
    const blog = await Blog.find({}).populate('user', { username: 1, name: 1 });
    response.json(blog);
  } catch (error) {
    console.error('Error decoding token:', error);
    response.status(401).json({ error: 'token missing or invalid' });
  }
});

blogRouter.post("/", async (request, response, next) => {
  const body = request.body
  const user = request.user
  
  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user: user._id
  });

  try {
    const savedBlog = await blog.save();
    user.blog = user.blog.concat(savedBlog._id)
    await user.save()
    response.json(savedBlog);
  } catch (error) {
    next(error);
  }
});

blogRouter.delete("/:id", async (request, response, next) => {
  const id = request.params.id;
  const user = request.user;

  try {
    const blogToDelete = await Blog.findById(id);

    if (!blogToDelete) {
      return response.status(404).json({ error: "Blog no encontrado" });
    }

    // Aca verifico si el usuario que intenta eliminar es el creador del blog
    if (blogToDelete.user.toString() !== user._id.toString()) {
      return response.status(403).json({ error: "No tienes permisos para eliminar este blog" });
    }

    await Blog.findByIdAndDelete(id);

    response.status(204).end();
  } catch (error) {
    next(error);
  }
});

blogRouter.put("/:id", async (request, response, next) =>{
  const id = request.params.id
  const body = request.body;
  
  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  };
 
  try {
    const updateBlog = await Blog.findByIdAndUpdate(id, blog, { new: true })
    response.json(updateBlog)
  } catch (error) {
    next(error)
  }
})

module.exports = blogRouter;
