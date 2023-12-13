import './App.css'
import logo from './assets/logo-white.png'
import {Route, Routes} from "react-router-dom";
import Navigation from "./pages/Navigation/Navigation.jsx";
import BlogDetails from "./pages/Blogs/BlogDetails.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx"
import Home from "./pages/Home/Home.jsx";
import NewBlog from "./pages/NewBlog/NewBlog.jsx";


function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/new-blog" element={<NewBlog/>}/>
                <Route path="/blogs" element={<Blogs/>}/>
                <Route path="/blogs/:id" element={<BlogDetails/>}/>
                {/*<Route path="/page-not-found" element={<PageNotFound/>}/>*/}
            </Routes>
        </>
    )
}

export default App
