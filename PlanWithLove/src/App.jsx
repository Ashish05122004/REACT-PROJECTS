import React, { useState } from 'react'
import Tour from './components/Tour'
import data from './data'

export default function App() { 
  const [tours,setTours] = useState(data)
  const removeTour =(id)=>{
    const newArray = tours.filter(tour =>tour.id !== id);
    setTours(newArray);
  }

  if(tours.length === 0){
    return (
      <div className='flex justify-center items-center flex-col min-h-[100vh] gap-4'>
        <h2 className='font-bold text-4xl text-green-300'>NO TOURS LEFT</h2>
        <button onClick={()=>setTours(data)} className=' border-gray-700 bg-gray-600 px-[3.4rem] py-[0.7rem] text-white'>Refresh</button>
      </div>
    )
  }
  return (
    <div>
      <Tour tours={tours} removeTour={removeTour}></Tour>
    </div>
  )
}
