import React from 'react'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='flex flex-col items-center'>
      <Header />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App
