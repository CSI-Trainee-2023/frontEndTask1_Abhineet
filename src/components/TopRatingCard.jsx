import React from 'react'
import star from '../assets/star.svg';

function TopRatingCard(props) {
  return (
    <div className='topratingcardcontainer'>
      <img width='250vw' src={props.img} />
      <div className="topratingcardtext">
        <div className="topratingname">{props.text}</div>
        <div><img src={star}/></div>
        <div className='headtext'>30$</div>
      </div>
    </div>
  )
}

export default TopRatingCard
