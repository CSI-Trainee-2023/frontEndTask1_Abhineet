import React from 'react'
import Navbar from './components/Nav'
import Foot from './components/Foot'
import glassbox from './assets/glassbox.svg';
function ProductDetails1() {
  return (
    <>
      <Navbar/>
      <div className="productDetailContainer">
        <div className="productDetailImg">
        <img width='400rem' src={glassbox}/>
        </div>
        <div className="productDetailImg">
        <img width='400rem' src={glassbox}/>
        </div>
        <div className="productDetailText">
            <div className="headtext4">Glass Towel</div>
            <div className="headtext4">30 $</div>
            <select id="qty" className='quantity'> Select Size
            <option value="0">Select Size</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
            <div>
            <button id='cart'> ADD TO CART</button>
            </div>
        </div>
      </div>
      <img width='500rem' id='horizontalDetail' src={glassbox}/>
      <div className="extradetails">
        <div>Details</div>
        <div>Twin duvet cover set in soft, woven fabric made from a Tencel™lyocell and cotton <br></br>blend with a printed pattern. One pillowcase. Thread count 144.</div>
        <div>Composition — Cotton 50%, Lyocell 50% <br></br>Art. No. — 0643448004</div>
      </div>
      <Foot/>
    </>
  )
}

export default ProductDetails1
