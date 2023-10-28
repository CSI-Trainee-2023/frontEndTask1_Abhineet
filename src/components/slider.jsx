import React from 'react'
import '../index.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide,Fade } from 'react-slideshow-image'
import slideImg1 from '../assets/slideImg1.svg'

const slides = [
    <div className="chair-content" key={1}>
        <div>
      <img src={slideImg1} style={{ width: 450}} />
      </div>
      <div className='chair-content2'>
       <div className="headtext2">
        <p>Hot Deals This Week</p>
       </div>
       <div className="Sale">
        <p className='saletext'>SALE 50% OFF<br></br>MODERN FURNITURE</p>
       </div>
       <div className="chairbutton">
        <button id='viewDetail'>VIEW NOW</button>
       </div>
      </div>
    </div>,
    <div className="chair-content" key={2}>
        <div><img src={slideImg1} style={{ width: 450}}/></div>
        <div className='chair-content2'>
       <div className="headtext2">
        <p>Hot Deals This Week</p>
       </div>
       <div className="Sale">
        <p className='saletext'>SALE 50% OFF<br></br>MODERN FURNITURE</p>
       </div>
       <div className="chairbutton">
        <button id='viewDetail'>VIEW NOW</button>
       </div>
      </div>
      
    </div>,
       <div className="chair-content" key={3}>
       <div><img src={slideImg1} style={{ width:450 }}/></div>
       <div className='chair-content2'>
       <div className="headtext2">
        <p>Hot Deals This Week</p>
       </div>
       <div className="Sale">
        <p className='saletext'>SALE 50% OFF<br></br>MODERN FURNITURE</p>
       </div>
       <div className="chairbutton">
        <button id='viewDetail'>VIEW NOW</button>
       </div>
      </div>
       </div>, 
  ];

  const ImageSlider = () => {
    return (
      <div className="slider-container">
        <Slide images={slides}>
          {slides.map((slide, index) => (
            <div key={index} className="each-slide">
              {slide}
            </div>
          ))}
        </Slide>
      </div>
    );
  };
  
  export default ImageSlider;