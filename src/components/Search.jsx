import React from 'react'
import './Nav.css'
import search from '../assets/search.svg';
import truck from '../assets/truck.svg';
import refund from '../assets/refund.svg';
import support from '../assets/support.svg';

function search() {
  return (
    <div>
        <div className="container">
            <div className='searchBar'>
                <div className="textSpace">
                <img src={search}  />
                <input type="text"/>
                </div>
            </div>
            <button id="search">Search</button>
        </div>
        <div className='info'>
            <div className='shipping'>
                <img src={truck}  />
                <div className="shippingText">FREE SHIPPING</div>
            </div>
            <div className="shipping">
                <img src={refund}  />
                <div className="refundText">100% REFUND</div>
            </div>
            <div className="shipping">
                <img src={support}  />
                <div className="supportText">SUPPORT 24/7</div>
            </div>
            
        </div>
      
    </div>
  )
}

export default search
