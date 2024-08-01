import React, { useState } from 'react'
import Card from './Card'

const Courses = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  let allCourses = [];
  const getCourses = () => {
    if (category === "All") {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        })
      })
      return allCourses;
    }
    else {
      return courses[category];
    }
  }
  return (
    <div className='flex flex-wrap justify-center w-[70%] gap-6'>
      {
        courses !== null?
        (
          getCourses().map((course) => {
          return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
        })
        )
        :(
          <h2 className='text-white text-[2.5rem] mt-[20vh]'>No Results Found💀💀</h2>
        )
      }
    </div>

  )
}
export default Courses
