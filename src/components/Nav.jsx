import React from 'react'
import './Nav.css'
import googleFonts from 'google-fonts';
import logo from '../assets/logo.svg';
import cart from '../assets/cart.svg';
import profile from '../assets/profile.svg';
import { Link } from 'react-router-dom';

 
googleFonts.add({ Roboto: ['300', '400', '700'] });
const Navbar = () => {

  function addToCart(){

  }

  return (
    <>
    <div className='header'>
         <div className='head'>
            <div className='headLeft'>
                <img src={logo}/>
                <div className='brandName'>BRAND NAME</div>
            </div>
            <div className='headRight'>
              <div className='cart' onClick={addToCart}>
                <img src={cart}/>
                </div>
                <img src={profile}/>
            </div>
        </div>

        <div className="navbar-box">
            <ul className='navbar-items' >
            <li>
            <Link to="/ ">
                 <button id='home'>HOME</button>
            </Link>
             </li>
            <li> STORE</li>
            <li> ACCESSORIES </li>
            <li> BRAND</li>
            <li> PAGES</li>
            <li> ABOUT US</li>
            <li> NEWS</li>
            <li> CONTACT US</li>
            </ul>
        </div>
        
    </div>
    </>
  )
}

export default Navbar;
