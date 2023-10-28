import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Home from './Home.jsx'
import ProductDetails from './ProductDetails'
import App from './App'
import ProductDetails1 from './ProductDetails1'
const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>} >
    <Route path='' element={<Home/>}/>
  <Route path='productpage' element={<ProductDetails/>}/>
  <Route path='productpage1' element={<ProductDetails1/>}/>
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
