import React from 'react';
import './index.css';



const Blog = () => {
 return (
   <div className='blog'>
     <h2>Blog</h2>
     <div className='blog-section'>
       <div className='blog-post'>
        <h2 style={{ color: 'white'}}>Unveiling the Power of Resilience: A Dive into "Born a Crime"</h2>
         <p>In the annals of memoirs that transcend cultures and challenge societal norms, Trevor Noah's "Born a Crime" stands as a beacon of hope and resilience. This book, a testament to the indomitable spirit of humanity, offers a lens through which we can view contemporary social, political, and economic issues with renewed insight. Born a Crime explores themes of identity, race, and socio-economic disparities, resonating deeply with today's global conversations on diversity, equity, and inclusion.</p>
         <button className='play-button'>Read More</button>
       </div>
       <div className='blog-image'>
         <img src = "images/bornacrime.jpg"  alt="Born a Crime book cover" className='book-img'/>
       </div>
     </div>

   </div>
 )
}
export default Blog;