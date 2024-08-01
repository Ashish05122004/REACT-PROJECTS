import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const submitHandler = (event) => {
        event.preventDefault();
        setIsLoggedIn(true);
        navigate('/dashboard');
        toast.success("Logged in");
        console.log(formData);
    }
    return (
        <div className='w-full mt-5'>
            <form onSubmit={submitHandler}>
                <label>
                    <p className=' mb-2'>
                        Email Address <sup className=' text-red-600'>*</sup>
                    </p>
                    <input
                        required
                        type="email"
                        onChange={changeHandler}
                        name='email'
                        value={formData.email}
                        placeholder='Enter email address'
                        className='w-full py-3 rounded-md bg-[#161D29] px-4 border-b-[1px] border-b-gray-500'
                    />
                </label>
                <label className='relative'>
                    <p className=' mb-2'>
                        Password <sup className=' text-red-600'>*</sup>
                    </p>
                    <input
                        required
                        type={
                            showPassword ? ("text") : ("password")
                        }
                        onChange={changeHandler}
                        name='password'
                        value={formData.password}
                        placeholder='Enter Password'
                        className='w-full py-3 rounded-md bg-[#161D29] px-4 border-b-[1px] border-b-gray-500'
                    />
                    <span onClick={() => {
                        setShowPassword((prev) => !prev);
                    }}
                        className='absolute right-2 top-[5.3rem]'
                    >
                        {showPassword ? (<FaEyeSlash fontSize={25} fill='#AFB2BF'/>) : (<FaEye fontSize={25} fill='#AFB2BF'/>)}
                    </span>

                    <Link to="#">
                        <p className=' text-blue-400 max-w-max ml-auto'>Forgot Password</p>
                    </Link>

                </label>
                <button className='w-full bg-yellow-400 text-black font-semibold py-2 rounded-md mt-[3rem]'>
                    Sign in
                </button>
            </form>
        </div>
    )
}

export default LoginForm
