import React from 'react'
import linenTowel from '../assets/linenTowel.svg';
import star from '../assets/star.svg';
function ItemContainer(props) {
  return (
    <div className='smallcont'>
        < img src={props.img} id='smallcontImg' />
        <div>{props.text}</div>
        <div><img src={star}/></div>
        <div className='headtext'>30$</div>
    </div>
  )
}

export default ItemContainer
