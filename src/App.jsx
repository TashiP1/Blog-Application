import './App.css'
import {Navbar} from "./component/Navbar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home} from "./page/home"
import {Blog} from "./blog/blog"
import { BlogDetails } from './BlogDetails'

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/newBlog' element={<Blog />}/>
            <Route path='/newBlog/:id' element={<BlogDetails />}/>
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
