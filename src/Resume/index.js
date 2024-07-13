import "./index.css"
import eshe from "./Images/eshe.png"
import funani from "./Images/funani.png"
import nyambura from "./Images/nyambura.png"
import shimwe from "./Images/shimwe.png"
import Oyelaaa from "./Images/Oyelaaa.png"

function Resume(){
    return(
        <div className='container'>
<div>
   <h2 className='heading'> Resume Portfolio</h2>
</div>
<div className='threeportraits'>
   <div className='profileone'>
  <img src={eshe} alt='headshot' className='portrait'></img>
  <p>Eshe Aziz</p>
  <button><a href='https://myresume-eight-lac.vercel.app/' className='button'>View</a></button>
  </div>
  <div className='profiletwo'>
  <img src={nyambura} alt='headshot' className='portrait'></img>
  <p>Faith Nyambura</p>
  <button><a href='https://folio-ochre.vercel.app/' className='button'>View</a></button>
  </div>
  <div className='profilethree'>
  <img src={shimwe} alt='headshot' className='portrait'></img>
  <p>Nancy Shimwe</p>
  <button><a href='https://resume-seven-umber.vercel.app' className='button'>View</a></button>
  </div>
</div>
<div className='lasttwoportraits'>
  <div className='profilefour'>
  <img src={funani} alt='headshot' className='portrait'></img>
  <p>Rehema Funani</p>
  <button><a href='https://portfolio-sand-xi-33.vercel.app/' className='button'>View</a></button>
  </div>
  <div className='profilefive'>
  <img src={Oyelaaa} alt='headshot' className='portrait1' ></img>
  <p>Eyvone Annet Oyella</p>
  <button><a href='public/cv/_Oyella--CV (2).pdf' className='button'>View</a></button>
  </div>
  </div>
</div>
    )
}

export default Resume;