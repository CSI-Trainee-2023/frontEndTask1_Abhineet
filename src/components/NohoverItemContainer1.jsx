import React from 'react'
import linenTowel from '../assets/linenTowel.svg';
import { Link } from 'react-router-dom';

const produc1="/"
export let currentData= {};
function NohoverItemContainer(props) {
  const currentProduct=()=>{
      currentData= props;
  }
  return (
    <div className='bigCont'>
      <img id='linenTowel' src={props.img}  />
      <div className="textoverlay" >
      <div className="headtext1">{props.text}</div>
      <div>Lorem ipsum, dolor sit amet<br></br> consectetur  adipisicing elit. </div>
      <Link to={props.link}>
      <button id='viewDetail' onClick={currentProduct}>VIEW DETAILS </button>
      </Link>
      </div>
    </div>
  )
}

export default NohoverItemContainer
