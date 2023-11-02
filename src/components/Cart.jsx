import React from 'react'
import { products } from '../ProductDetails'
import Navbar from './Nav.jsx';
import Foot from './Foot.jsx';
function Cart() {
  return (
    <div>
      <Navbar/>
      <div id="cartHeader">
            <div className="Product1">Product</div>
            <div className="Product2">Name</div>
            <div className="Product3">Price</div>
        </div>
        {products.map((item) => (
                <div className="cartfinal">
               <div className="cartimage">
                 <img src={item.img} />
               </div>
               <div className="carttext">{item.text}</div>
               <div className="detailprice">$39.99</div>
               </div>
               ))}
      <Foot/>
    </div>
  )
}
export default Cart
