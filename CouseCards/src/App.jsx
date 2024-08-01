import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import Spinner from './Components/Spinner'
import { filterData, apiUrl } from './data'
import { toast } from 'react-toastify'

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className='flex flex-col justify-center items-center h-[3rem] mt-4 mb-3'>
        <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
      </div>
      <div className='flex justify-center items-center mt-3'>
        {
          loading?(<Spinner/>):(<Cards courses={courses} category={category}/>)
        }
      </div>
    </div>
  )
}
export default App
