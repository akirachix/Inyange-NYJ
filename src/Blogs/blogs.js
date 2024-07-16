import { Link } from "react-router-dom"
import './blogs.css';

const Blogs = ()=>{
    return(

        <div className='blog'>
        <div className='blog-section'>
          <div className='blogs-post'>
           <h2 style={{ color: 'white'}}>Navigating Identity in a Divided World</h2>
            <p>Trevor Noah's journey from a mixed-race child in apartheid South Africa to an international comedy sensation is a narrative of navigating identity in a world often divided by race and prejudice. His experiences highlight the complexities of racial identity and the challenges faced by those who do not fit neatly into predefined categories. In today's climate, where discussions around racial equality and representation are at the forefront, Noah's exploration of his own identity serves as a reminder of the importance of recognizing and celebrating our shared human experience.
            </p>
          </div>
          <div className='blog-image'>
            <img src = "images/bornacrime.jpg"  alt="Born a Crime book cover" className='books-img'/>
          </div>
          
        </div>

        <div className='blog-section'>
          
          <div className='blog-image'>
            <img src = "images/trevor.jpg"  alt="Born a Crime book cover" className='books-img-two'/>
          </div>

          <div className='blogs-post-two'>
           <h2 style={{ color: 'white'}}>Economic Disparities and Social Justice</h2>
            <p>"Born a Crime" also delves into the socio-economic realities of South Africa, offering a glimpse into the stark inequalities that persist even after the end of apartheid. Through Noah's eyes, we witness the impact of systemic poverty and the struggle for survival amidst adversity. This aspect of the book resonates with current debates on economic inequality and social justice, emphasizing the need for policies that address wealth disparity and ensure equal opportunities for all.
            </p>
          </div>
          
        </div>
        <button className="play-buttons"><Link to="/Blog">Back</Link></button>
   
      </div>
    )
}
export default Blogs