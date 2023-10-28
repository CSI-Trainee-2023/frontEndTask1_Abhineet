import React from 'react'
import TopRatingCard from './TopRatingCard'
import tray from '../assets/traywithfoot.svg';
import cusion from '../assets/cusion.svg';
import fluted from '../assets/fluted.svg';
import eggcup from '../assets/eggcup.svg';
import bamboo from '../assets/bamboo.svg';
import glazed from '../assets/glazed.svg';
function TopRating() {
  return (
    <div className='topRatingContainer'>
      <div className="headtext3">TOP RATING</div>
      <div className="topratingcard">
        <TopRatingCard img={tray} text="Tray with foot"/>
        <TopRatingCard img={cusion} text="Tray with cusion"/>
        <TopRatingCard img={fluted} text="Fluted Glass Beverage"/>
        </div>
        <div className="topratingcard">
        <TopRatingCard img={eggcup} text="Ceremic Egg Cup"/>
        <TopRatingCard img={bamboo} text="Small Bamboo Box"/>
        <TopRatingCard img={glazed} text="Glazed Stoneware Plate "/>
        </div>
    </div>
  )
}

export default TopRating
