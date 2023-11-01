// import { useState } from 'react'

// import Navbar from './components/Navbar.jsx'
import Navbar from './components/Nav.jsx';
import Foot from './components/Foot.jsx';
import NonHoverItem from './components/NonHoverItem.jsx';
import HoverItem from './components/HoverItem.jsx';
import FourItemContainer from './components/FourItemContainer.jsx';
import BedSheetSet from './components/BedSheetSet.jsx';
import ImageSlider from './components/slider.jsx';
import TopRating from './components/TopRating.jsx';
import Search from './components/search.jsx';

function Home() {


  return (
    <>
    <Navbar/>
    <Search/>
    <ImageSlider/>
    <NonHoverItem/>
    <FourItemContainer/>
    <BedSheetSet/>
    <TopRating/>
    <Foot/>
    </>
  )
}

export default Home
