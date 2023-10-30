import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [name, setName] = useState("Tashi");
  const [age, setAge] = useState(23);
  const [initialName, initialAge] = ["Tashi", 23];
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Tashi Phuntsho');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(blog)
    }).then(()=>{
        console.log('new Blog added');
        setIsPending(false);
        navigate('/newBlog');
    })
  }

  const handleClick = () => {
    if (name === initialName && age === initialAge) {
      setName("Pema");
      setAge("25");
    } else {
      setName(initialName);
      setAge(initialAge);
    }
  };

  useEffect(() => {
    console.log("use effect ran");
  }, [name]);

  return (
    <div className="new">
      <h2>Home</h2>
      <h3>
        {name} is {age} years old
      </h3>
      <button onClick={handleClick}>Age of Authors</button>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Create a New Blog</h2>
          <label>Blog Title</label>
          <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <label>Blog Body</label>
          <textarea required value={body} onChange={(e)=>setBody(e.target.value)}/>
          <label>Blog author</label>
          <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
            <option value="Tashi Phuntsho">Tashi</option>
            <option value="Pema Thinley">Pema</option>
          </select>
          {!isPending &&  <button>Add Blog</button>}
          {isPending && <button disabled>Adding Blog....</button>}
        </div>
      </form>
    </div>
  );
};
