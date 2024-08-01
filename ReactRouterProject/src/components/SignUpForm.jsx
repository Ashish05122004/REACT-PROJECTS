import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const SignUpForm = ({ setIsLoggedIn }) => {
    const [accountType,setAccountType] = useState("student");
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
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
        const finalData ={
            ...formData,
            accountType
        }
        if (formData.password === formData.confirmPassword) {
            event.preventDefault();
            navigate('/login');
            toast.success("Account created");
            console.log(finalData);
            return;
        }
        else {
            toast.error("Password do not match");
            return;
        }
    }
    
    return (
        <div className='w-full'>
            <div 
                className='w-[14rem] py-1 rounded-3xl bg-[#161D29] px-2 border-b-[1px] border-b-gray-500 flex gap-3 justify-between mt-3 mb-3'
            >
                <button 
                    className={
                        `${accountType === "student"?"bg-black text-white":" bg-transparent text-gray-400"} px-5 h-[2.4rem] rounded-full max-w-max transition-all duration-200`
                    }
                    onClick={()=>setAccountType("student")}
                >Student</button>
                <button 
                    className={
                        `${accountType === "instructor"?"bg-black text-white":" bg-transparent text-gray-400"} px-5 h-[2.4rem] rounded-full max-w-max transition-all duration-200`
                    }
                    onClick={()=>setAccountType("instructor")}
                >Instructor</button>
            </div>
            <form onSubmit={submitHandler}>
            {/* name */}
                <div className='flex gap-x-4 w-full'>
                    <label className='w-full'>
                        <p>First Name <sup className=' text-red-600'>*</sup></p>
                        <input
                            required
                            type="text"
                            name='firstName'
                            placeholder='Enter your first name'
                            onChange={changeHandler}
                            value={FormData.firstName}
                            className='w-full py-3 rounded-md bg-[#161D29] px-4 border-b-[1px] border-b-gray-500'

                        />
                    </label>
                    <label className='w-full'>
                        <p>Last Name <sup className=' text-red-600'>*</sup></p>
                        <input
                            required
                            type="text"
                            name='lastName'
                            placeholder='Enter your last name'
                            onChange={changeHandler}
                            value={FormData.lastName}
                            className='w-full py-3 rounded-md bg-[#161D29] px-4 border-b-[1px] border-b-gray-500'

                        />
                    </label>
                </div>
            {/* email */}
                <label>
                    <p>Email address <sup className=' text-red-600'>*</sup></p>
                    <input
                        required
                        type="email"
                        name='email'
                        placeholder='Enter email address'
                        onChange={changeHandler}
                        value={FormData.email}
                        className='w-full py-3 rounded-md bg-[#161D29] px-4 border-b-[1px] border-b-gray-500'

                    />
                </label>
            {/* password */}
                <div className='flex gap-x-4 mt-3 w-full'>
                    <label className='w-full relative'>
                        <p>
                            Create Password<sup className=' text-red-600'>*</sup>
                        </p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            onChange={changeHandler}
                            name='password'
                            value={formData.password}
                            placeholder='Enter Password'
                            className='w-full py-3 rounded-md bg-[#161D29] px-4 border-b-[1px] border-b-gray-500'

                        />

                        <span onClick={() => {
                            setShowPassword((prev) => !prev);
                        }
                        }
                            className='absolute right-1 bottom-[1rem]'>
                            {showPassword ? (<FaRegEyeSlash fontSize={25} fill='#AFB2BF'/>) : (<FaRegEye fontSize={25} fill='#AFB2BF'/>)}
                        </span>
                    </label>
                    <label className='w-full relative'>
                        <p>
                            Confirm Password<sup className=' text-red-600'>*</sup>
                        </p>
                        <input
                            required
                            type={showPassword1 ? ("text") : ("password")}
                            onChange={changeHandler}
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            placeholder='Confirm Password'
                            className='w-full py-3 rounded-md bg-[#161D29] px-4 border-b-[1px] border-b-gray-500'
                        />

                        <span onClick={() => {
                            setShowPassword1((prev) => !prev);
                        }
                        }
                            className='absolute right-1 bottom-[1rem]'>
                            {showPassword1 ? (<FaRegEyeSlash fontSize={25} fill='#AFB2BF' />) : (<FaRegEye fontSize={25} fill='#AFB2BF' />)}
                        </span>
                    </label>
                </div>
                <button className='w-full bg-yellow-400 text-black font-semibold py-2 rounded-md mt-[1.5rem]'
                >Create Account</button>
            </form>
        </div>
    )
}

export default SignUpForm
