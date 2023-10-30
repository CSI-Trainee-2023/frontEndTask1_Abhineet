import React from 'react'
import vintageChair from '../assets/vintageChair1.jpg';
import vase from '../assets/terracottaVase1.jpg';
import { Link } from 'react-router-dom';
function NonHoverItem() {
  return (
    <>
    <div className='info'>
    <div className='nonHItemContainer'>
      <div className="vintageChair">
        <div>
        <img width='200rem' src={vintageChair}/>
        </div>
        <div className='vintageChairText'>
            <div className='headtext'> 
            IVY VINTAGE CHAIR
            </div>
            {/* <Link to="/productpage"> */}
            <button id='viewDetail'>VIEW DETAILS </button>
            {/* </Link> */}
        </div>
      </div>
    </div>
    <div className='nonHItemContainer'>
      <div className="terracotta">
        <div>
        <img width='200rem' src={vase}/>
        </div>
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
