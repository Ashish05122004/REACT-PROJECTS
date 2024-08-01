import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { toast } from 'react-hot-toast'

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {

    return (
        <div className='bg-[#000c23] text-gray-300 py-2 border-b-[1px] border-b-gray-700'>
            <div className='flex mx-auto w-10/12 justify-between '>
                <Link to="/">
                    <img src={logo} alt='logo' loading='lazy' width={160} height={32} />
                </Link>

                <nav>
                    <ul className='flex gap-5 ml-10 text-[1.1rem]'>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className='flex gap-4 ml-10 text-[1.1rem]'>
                    {!isLoggedIn &&
                        <Link to="/login">
                            <button className='border-[1px] border-gray-500 px-3 py-2 rounded-md bg-[#161D29]'
                            >Login</button>
                        </Link>
                    }
                    {!isLoggedIn &&
                        <Link to="/signup">
                            <button
                                className='border-[1px] border-gray-500 px-3 py-2 rounded-md bg-[#161D29]'
                            >Sign Up</button>
                        </Link>
                    }
                    {isLoggedIn &&
                        <Link to="/">
                            <button className='border-[1px] border-gray-500 px-3 py-2 rounded-md bg-[#161D29]'
                                onClick={
                                    () => {
                                        setIsLoggedIn(false);
                                        toast.success("logged Out");
                                    }
                                }>Log Out</button>
                        </Link>
                    }
                    {isLoggedIn &&
                        <Link to="/dashboard">
                            <button
                                className='border-[1px] border-gray-500 px-3 py-2 rounded-md bg-[#161D29]'                         >Dashboard</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar
