import React from 'react'
import NavBar from "./components/NavBar"
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Contact from './pages/Contact'
import AllProducts from './pages/AllProducts'
import About from './pages/About'

const App = () => {
  return (
    <div >
        <div>
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/allproducts" element={<AllProducts />}/>
        </Routes>

        
    </div>
  )
}

export default App
