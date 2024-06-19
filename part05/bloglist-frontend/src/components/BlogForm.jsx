import { useState } from "react";

const CreateForm = ({createBlog}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [likes, setLikes] = useState(0);

  const addBlog = (event) => {
    event.preventDefault();
    createBlog({
      title: title,
      author: author,
      url: url,
      likes: likes,
    });
    setTitle("");
    setAuthor("");
    setUrl("");
    setLikes(0);
   };


 return(
    <div>
    <form onSubmit={addBlog}>
      <div>
        title
        <input
          type="text"
          value={title}
          name="title"
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div>
        author
        <input
          type="text"
          value={author}
          name="author"
          onChange={({ target }) => setAuthor(target.value)}
        />
      </div>
      <div>
        url
        <input
          type="text"
          value={url}
          name="url"
          onChange={({ target }) => setUrl(target.value)}
        />
      </div>
      <div>
        likes
        <input
          type="number"
          value={likes}
          name="likes"
          onChange={({ target }) => setLikes(target.value)}
        />
      </div>
      <button type="submit">create</button>
    </form>
    </div>
 )
}


export default CreateForm