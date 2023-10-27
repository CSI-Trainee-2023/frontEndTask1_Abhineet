import React from 'react'
import vintageChair from '../assets/vintageChair1.jpg';
import vase from '../assets/terracottaVase1.jpg';
function NonHoverItem() {
  return (
    <>
    <div className='info'>
    <div className='nonHItemContainer'>
      <div className="vintageChair">
        <img width='200rem' src={vintageChair}/>
        <div className='vintageChairText'>
            <div className='headtext'> 
            IVY VINTAGE CHAIR
            </div>
            <button id='viewDetail'>VIEW DETAILS </button>
        </div>
      </div>
    </div>
    <div className='nonHItemContainer'>
      <div className="terracotta">
        <img width='200rem' src={vase}/>
        <div className='vintageChairText'>
            <div className='headtext'> 
            TERRACOTTA VASE
            </div>
            <button id='viewDetail'>VIEW DETAILS </button>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default NonHoverItem
