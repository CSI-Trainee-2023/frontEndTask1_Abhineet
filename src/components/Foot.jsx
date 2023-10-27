import React from 'react'
import './Foot.css'
import googleFonts from 'google-fonts';
import facebook from '../assets/facebook.svg';
import x from '../assets/x.svg';
import insta from '../assets/insta.svg';
import youtube from '../assets/youtube.svg';
googleFonts.add({ Roboto: ['300', '400', '700'] });
function Foot() {
  return (
    <>
    <div className='footContainer'>
        <div className="footBrand">
            <div className="brandName">BRAND NAME</div>
            <div><p className='brandnametext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p></div>
            <div><p>121 king street, Melbourne 3000<br></br>+12 3 0000 0000<br></br>contact@brandemail.com</p></div>
            <div className='footIcons'>
            <div><img src={facebook}/></div>
            <div><img src={x}/></div>
            <div><img src={insta}/></div>
            <div><img src={youtube}/></div>
            </div>
                
                    
        </div>
        <div className="moreLinksContainer">
            <div className="moreLinks">SHOPPING</div>
            <ul className='brandContent' >
            <li>  Your cart</li>
            <li> Your orders</li>
            <li> Compared items </li>
            <li> Wishlist items</li>
            <li> Shipping detail </li>
            </ul>
            


        </div>
        <div className="moreLinksContainer">
            <div className="moreLinks">More links</div>
            <ul className='brandContent' >
            <li>  Blog</li>
            <li> Gift Center</li>
            <li> Buying Guides </li>
            <li> New Arrivals</li>
            <li> Clearance </li>
            </ul>
            


        </div>
        <div className="moreLinksContainer">
            <div className="moreLinks">PROMO UPDATE</div>
            <div className="promoupdate">
                <p>14 May</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            


        </div>


      
    </div>
    </>
  )
}

export default Foot
