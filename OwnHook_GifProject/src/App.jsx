import React from 'react'
import RandomGif from './components/RandomGif'
import Tag from './components/Tag'

const App = () => {
  return (
    <div className='w-full h-[100vh] bg-blue-400 flex flex-col items-center'>
        <h1 className=' text-center bg-white w-10/12 mt-5 py-1 font-bold text-[1.7rem] rounded-md'>RANDOM GIFS</h1>
      
        <RandomGif />
        <Tag />

    </div>
  )
}

export default App
