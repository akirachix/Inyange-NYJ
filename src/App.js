import "./App.css";
import LandingPage from "./LandingPage";
import Navbar from "./NavBar";
import Resume from "./Resume";
import Podcast from "./Podcast";
import Blog from "./Blog"
import Footer from "./Footer";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Blog/>
      <Podcast/>
      <Resume />
      <Footer/>
      
    </div>
  );
}

export default App;
 