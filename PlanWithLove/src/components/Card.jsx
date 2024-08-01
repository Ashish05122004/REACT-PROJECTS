import React, { useState } from 'react'

export default function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setReadmore] = useState(false);

  const readmoreHandler = () => {
    setReadmore(!readmore);
  }
  const description = readmore ? info : info.substring(0, 200) + "...";

  return (
    <div className='w-[20rem] flex justify-center items-center flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] pb-2 rounded-md'>
      <img src={image} alt="image" className='w-[19rem] m-2 object-cover' />
      <div className='m-2'>
        <div>
          <h3 className='text-green-600'>{price}</h3>
          <h3 className=' font-bold'>{name}</h3>
        </div>
        <div className=''>
          {description}
          <span onClick={readmoreHandler} className=' text-blue-600'>
            {
              readmore ? "Show less" : "Read more"
            }
          </span>
        </div>
      </div>
      <button onClick={() => removeTour(id)} className=' border-[2px] border-red-500 bg-red-200 rounded-xl w-[15rem] py-1 hover:bg-red-500 hover:text-white'>
        Not interested
      </button>
    </div>
  )
}
