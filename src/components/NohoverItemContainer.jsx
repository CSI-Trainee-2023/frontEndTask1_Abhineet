import React from 'react'
import linenTowel from '../assets/linenTowel.svg';
function NohoverItemContainer(props) {
  return (
    <div className='bigCont'>
      <img id='linenTowel' src={props.img}/>
      <div className="textoverlay">
      <div className="headtext1">{props.text}</div>
      <div>Lorem ipsum, dolor sit amet<br></br> consectetur  adipisicing elit. </div>
      <button id='viewDetail'>VIEW DETAILS </button>
      </div>
    </div>
  )
}

export default NohoverItemContainer
