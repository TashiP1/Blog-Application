import { Link } from "react-router-dom"

export const BlogList = ({blogs, titles, handleDelete}) => {

    return (
        <div className="blog-list">
        {titles ? <h2>{titles}'s Blog</h2> : <h2>All Blogs</h2>}
        {blogs.map((blogData)=>(
            <div className="blogPreview" key={blogData.id}>
                <Link to={`/newBlog/${blogData.id}`}>
                    <h3>{blogData.title}</h3>
                    <p>Authered by {blogData.author}</p>
                    <p>Click for more details</p>
                </Link>
                {/* <button onClick={()=> handleDelete(blogData.id)}>Delete</button> */}
            </div>
        ))}
    </div>
    )
}