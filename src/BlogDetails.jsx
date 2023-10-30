import { useParams, useNavigate } from "react-router-dom"
import { useFetch } from "./useFetch"

export const BlogDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const {data:blog, error, ispending} = useFetch('http://localhost:8000/blogs/' + id);

    const handleDelete=()=>{
        fetch('http://localhost:8000/blogs/' + id, {
            method: "DELETE"
        }).then(()=>{
            navigate('/newBlog');
        })
    } 

    return (
        <div className="blog-details">
            {ispending && <div>Loading...</div>}
            {error && <h4>{error}</h4>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h3>Written by {blog.author}</h3>
                    <p>{blog.body}</p>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            ) }
        </div>
    )
}