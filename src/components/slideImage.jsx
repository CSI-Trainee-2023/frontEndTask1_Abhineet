import React from 'react'
import '.././index.css'
import slideImg1 from '../assets/slideImg1.svg';
export default function SlideImage() {
  return (
    <div className='slideImageContainer'>
        <div className='slideimg1'>
        <img src={slideImg1}/>
        </div>
        <div></div>
    </div>
  )
}
