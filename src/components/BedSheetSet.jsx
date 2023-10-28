import React from 'react'
import bedsheetSet from '../assets/bedsheetset.svg';
function BedSheetSet() {
  return (
    <div className='bedsheetContainer'>
        <div class="bedsheetImg">
        <img src={bedsheetSet} style={{width:'100%' , height:'auto' }}/>
        </div>
        <div class="bedsheetText" >
            <div className="headtext1">BED SHEET SETS</div>
            <div className="headtext1">$50.00</div>
            <div className="headtext2">Lorem ipsum dolor sit amet, consectetur <br></br>adipiscing elit, sed do eiusmod tempor.</div>
        </div>
      
    </div>
  )
}

export default BedSheetSet
