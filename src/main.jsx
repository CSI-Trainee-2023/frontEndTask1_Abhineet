import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Home from './Home.jsx'
import ProductDetails from './ProductDetails'
import App from './App'
const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>} >
    <Route path='' element={<Home/>}/>
  <Route path='productpage' element={<ProductDetails/>}/>
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
