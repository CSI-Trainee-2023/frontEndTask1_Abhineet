import React, { useState } from 'react'

import ItemContainer from './ItemContainer';
import NohoverItemContainer from './nohoverItemContainer';
function HoverItem(props) {
    const[showSpeed,setShow]=useState(false)
    function toggleCard()
    {
        setShow(true);
    }
    function toggleCard1()
    {
        setShow(false);
    }
  return (
    
    <>
    <div className='hoverItemRow'>
      <div className='hoverItemContainer' onMouseOver={toggleCard}onMouseOut={toggleCard1}>
            {showSpeed?<NohoverItemContainer img={props.img} text={props.text} link={props.link}/>:<ItemContainer img={props.img} text={props.text}/>}
      </div>
      </div>
    </>
  )
}

export default HoverItem
