import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className='h-screen w-full'
        style={{ backgroundColor: color }}
      >
        <div className='fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-12'>
          <div className='flex flex-wrap gap-3 bg-white px-5 py-2 rounded-lg'>
            <button
              className='px-5 py-2 rounded-xl text-white'
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >Red</button>
            <button
              className='px-5 py-2 rounded-xl text-white'
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >Blue</button>
            <button
              className='px-5 py-2 rounded-xl text-white'
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >Green</button>
            <button
              className='px-5 py-2 rounded-xl text-white'
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}
            >Black</button>
            <button
              className='px-5 py-2 rounded-xl'
              style={{ backgroundColor: "white" }}
              onClick={() => setColor("white")}
            >White</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
