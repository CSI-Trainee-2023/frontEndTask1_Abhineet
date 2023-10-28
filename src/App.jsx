// import { useState } from 'react'

// import Navbar from './components/Navbar.jsx'
import Navbar from './components/Nav.jsx';
import Foot from './components/Foot.jsx';
import SlideImage from './components/slideImage.jsx';
import NonHoverItem from './components/NonHoverItem.jsx';
import HoverItem from './components/HoverItem.jsx';
import FourItemContainer from './components/FourItemContainer.jsx';
function App() {


  return (
    <>
    <Navbar/>
    <SlideImage/>
    <NonHoverItem/>
    <FourItemContainer/>
    <Foot/>
    </>
  )
}

export default App
