import "./index.css"
import logo from "./image/logo.png"
import headphone from "./image/headphones.png"



function LandingPage(){
    return(
        <div className="landing-page">
        <nav className="navbar">
          <div className="logo">INYANGE
          <img src={logo} alt="Logo" />
          </div>
          <div className='Links'/>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#videos">Videos</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#podcast">Portfolio</a></li>
          </ul>
        </nav>

        <div className="all">
        <div className="hero">
          <div className="hero-text">
            <h1>Experience Content,<br/>Not Distractions</h1>
            <p>Welcome into a world of multimedia. We will be sharing different contents that resonates with your passion.</p>
          </div>
          <div className="hero-image">
            <img src={headphone} alt="High-quality headphones" />
          </div>
        </div>
        </div>
      </div>
    )
}

export default LandingPage;