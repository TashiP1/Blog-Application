import { useFetch } from "../useFetch"
import {BlogList} from "./blogList"

export const Blog = () => {

    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs');

    // const handleDelete = (id) => {
    //     const newBlog = blog.filter(blog => blog.id !== id);
    //     setBlogs(newBlog);
    // }
    return (
        <div className="blog">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog &&  <BlogList blogs={blog}/> }
        </div>
    )
}