import React from 'react'
import './Nav.css'
import googleFonts from 'google-fonts';
import logo from '../assets/logo.svg';
import cart from '../assets/cart.svg';
import profile from '../assets/profile.svg';
import search from '../assets/search.svg';
import truck from '../assets/truck.svg';
import refund from '../assets/refund.svg';
import support from '../assets/support.svg';

googleFonts.add({ Roboto: ['300', '400', '700'] });
const Navbar = () => {
  return (
    <>
    <div className='header'>
         <div className='head'>
            <div className='headLeft'>
                <img src={logo}/>
                <div className='brandName'>BRAND NAME</div>
            </div>
            <div className='headRight'>
                <img src={cart}/>
                <img src={profile}/>
            </div>
        </div>

        <div className="navbar-box">
            <ul className='navbar-items' >
            <li>  HOME</li>
            <li> STORE</li>
            <li> ACCESSORIES </li>
            <li> BRAND</li>
            <li> PAGES</li>
            <li> ABOUT US</li>
            <li> NEWS</li>
            <li> CONTACT US</li>
            </ul>
        </div>
        {/* <div className="container">
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
            
        </div> */}
    </div>
    </>
  )
}

export default Navbar;
