import Togglable from "./Togglable";

const Blog = ({ blog, handleLike, handleDelete }) => (
  <div className="blog-style">
    {blog.title}
    <Togglable buttonLabel="ver">
      <ul className="list-style">
        <li>{blog.url}</li>
        <div className="btn-likes-flex">
        <li>{blog.likes}</li>
        <button onClick={() => handleLike(blog)}>Like</button>
        </div>
        <li>{blog.author}</li>
        <button onClick={() => handleDelete(blog)}>Delete</button>
      </ul>
    </Togglable>
  </div>
);

export default Blog;
