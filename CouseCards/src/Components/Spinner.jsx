import React from 'react'
import "./spinner.css";
const Spinner = () => {
  return (
    <div className='w-full min-h-[60vh] flex flex-col justify-center items-center'>
      <div className='loader'></div>
      <p>Loading...</p>
    </div>
  )
}

export default Spinner
