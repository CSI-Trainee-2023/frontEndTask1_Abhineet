import React from 'react'
import HoverItem from './HoverItem'
import linenTowel from '../assets/linenTowel.svg';
import glassbox from '../assets/glassbox.svg';
import ceramicplate from '../assets/ceramicplate.svg';
import pillocase from '../assets/pillocase.svg';
import bohochic from '../assets/bohochic.svg';
import largeglassbox from '../assets/largeglassbox.svg';
import wirebasket from '../assets/wirebasket.svg';
import decor from '../assets/decor.svg';
const product="/productpage"
const product1="/productpage1"
function FourItemContainer() {
  return (
    <>
    <div className='fourItemsContainer'>
       <div><HoverItem img={linenTowel} text="Linen Towel" link={product}/></div>
       <div><HoverItem img={glassbox} text="Glass Box" link={product}/></div>
       <div><HoverItem img={ceramicplate} text="Ceramic Plate" link={product} /></div>
       <div><HoverItem img={pillocase} text="Pillo Case" link={product}/></div>
    </div>
    <div className='fourItemsContainer'>
       <div><HoverItem img={bohochic} text="Boho Chic" link={product}/></div>
       <div><HoverItem img={largeglassbox} text="Large Glass Box"link={product}/></div>
       <div><HoverItem img={wirebasket} text="WireBasket"link={product}/></div>
       <div><HoverItem img={decor} text="Decor"link={product}/></div>
    </div>
    
    </>
  )
}

export default FourItemContainer
