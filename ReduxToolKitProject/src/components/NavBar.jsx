import React from 'react'
import logo from "../assets/logo.png"
import { Link} from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {

  return (
    <header className='w-full border-b-2 border-gray-300 bg-white shadow-md' >

      <nav className='flex justify-between items-center text-lg font-semibold mx-auto max-w-[1180px] p-3 '>
          <img src={logo} alt="" className='w-[10rem] h-[3rem]'/> 

          <ul className='flex gap-5 justify-center'>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/allproducts">
              <li>All Products</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>

          <div className='flex gap-4 items-center'>
            <button className='bg-gray-300 px-3 py-1 rounded-md'>
              <Link to="/login">
                Login
              </Link>
            </button>
            <Link to="/cart">
              <FaShoppingCart fontSize={25}/>
            </Link>
          </div>
      </nav>
    </header>
  )
}

export default NavBar
