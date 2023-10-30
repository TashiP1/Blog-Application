import {Link} from "react-router-dom"
import "./navbar.css"

export const Navbar = () => {
    return (
        <div className="nav">
            <div className="title">
                WEL<span>COME</span>
            </div>
            <div className="links">
                <Link to="/">Ho<span>me</span></Link>
                <Link to="/newBlog">New <span>Blog</span></Link>
            </div>
        </div>
    )
}