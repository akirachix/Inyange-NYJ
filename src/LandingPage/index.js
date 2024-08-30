import "./index.css"
import headphones from "./images/headphones.png"


function LandingPage(){
  return(
    <div className="contain">
    <div className="hero">
      <div className="hero-text">
        <h1>
          Experience Content,
          <br />
          Not Distractions
        </h1>
        <p>Welcome into a world of multimedia. We will be sharing different contents that resonates with your passion.</p>
      </div>
      <div className="hero-image">
        <img src={headphones} alt="High-quality headphones" className="hero-image" />
      </div>
    </div>
  </div>
  )
   
}

export default LandingPage;
