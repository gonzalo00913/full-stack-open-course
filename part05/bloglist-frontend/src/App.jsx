import { useState, useEffect} from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import loginService from "./services/login";
import Notification from "./components/Notification";
import LoginForm from "./components/LoginForm";
import CreateForm from "./components/BlogForm";
import Togglable from "./components/Togglable";
import "./App.css";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

 useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, [user]);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({ username, password });
      window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user));
      console.log("Token saved:", user.token);
      blogService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (error) {
      setErrorMessage("Usuario o contraseña incorrecta");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const addBlog = (blogObject) => {
    blogService
      .create(blogObject)
      .then((returnedBlog) => {
        setBlogs(blogs.concat(returnedBlog));
        setErrorMessage("blog creado con exito");
        setNewBlog("");
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.ValidationError
        ) {
          setErrorMessage(error.response.data.error);
        } else {
          setErrorMessage("Error al crear el blog");
        }
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
  };

  const handleLike = async (blog) => {
    const updatedLikes = blog.likes + 1;
    try {
      const updatedBlog = await blogService.update(blog.id, { likes: updatedLikes });
      setBlogs((prevBlogs) =>
        prevBlogs.map((b) => (b.id === updatedBlog.id ? updatedBlog : b))
      );
    } catch (error) {
      console.error("Error al actualizar los likes:", error);
    }
  };
  
  const handleDelete = async (blogToDelete) => {
    if(window.confirm(`Quieres realmente eliminar el blog "${blogToDelete.title}"?`)){
     try {
      await blogService.deleteBlog(blogToDelete.id)
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== blogToDelete.id));
     } catch (error) {
      console.error("Error deleting the blog:", error);
     }
  }
}
  const logout = () => {
    window.localStorage.clear();
  };

  return (
    <div>
      <h1>Crea tu blog</h1>
      <Notification message={errorMessage} />
      {errorMessage}
      {user === null ? (
        <Togglable buttonLabel="Iniciar sesion">
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
        </Togglable>
      ) : (
        <div>
          <p>{user.username} inicio-sesion</p>
          <Togglable buttonLabel="Crear nuevo blog">
            <CreateForm createBlog={addBlog} />
          </Togglable>
        </div>
      )}

      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} handleLike={handleLike} handleDelete={handleDelete}/>
      ))}

      <button onClick={logout}>Cerrar sesion</button>
    </div>
  );
};

export default App;
