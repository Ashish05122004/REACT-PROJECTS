import React from 'react'
import frame from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import { FcGoogle } from "react-icons/fc";

const Template = ({title,desc1,desc2,formtype,image,setIsLoggedIn}) => {
  return (
    <div className='text-white flex mx-auto w-10/12 justify-between mt-[3.5rem]'>
        <div className='flex flex-col justify-center w-[30rem] '>
            <h1 className='font-semibold text-[2rem] mb-2 leading-9'>{title}</h1>
            <p>
                <span className=' text-gray-400 text-[1.2rem]'>{desc1}</span>
                <span className=' text-blue-400 text-[1.2rem] courgette-regular font-bold'>{desc2}</span>
            </p>
            {
                formtype === "signup"?(<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
            }

            <div className='flex items-center gap-1 mt-2'>
                 <div className=" w-full h-[1px] bg-gray-500"></div>
                 <p className='text-gray-500'>OR</p>
                 <div className=" w-full h-[1px] bg-gray-500"></div>
            </div>

            <button className='w-full border-[1px] border-gray-500 font-semibold py-2 rounded-md mt-2 flex justify-center items-center gap-1'>
                <span><FcGoogle/></span>
                <p>Sign in with Google</p>
            </button>
        </div>
        <div className='relative w-11/12 max-w-[450px]'>
            <img src={frame} 
                alt="frame"
                width={558}
                height={504}
                loading='lazy'
            />
            <img src={image} 
                alt="frame"
                width={558}
                height={504}
                loading='lazy'
                className='absolute -top-4 right-4'
            />
        </div>
    </div>
  )
}

export default Template
