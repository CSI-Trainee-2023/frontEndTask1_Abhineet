import React from 'react'
import Home from './Home.jsx'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default App
