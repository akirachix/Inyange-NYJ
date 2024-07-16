import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./Blog"
import Blogs from "./Blogs/blogs";

const App = () => {
  
return(
  <Router>
  <div>
   
    <Routes>
    <Route path="/" element={<Blog/>}/>
    <Route path="/Blogs" element={<Blogs/>}/>
    <Route path="/"element={<Blogs/>}/>
    <Route path="/Blog" element={<Blog/>}/>
    </Routes>
  </div>
  </Router>
)
}
export default App;
