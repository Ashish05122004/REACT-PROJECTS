import React, { useState } from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = ({ course, likedCourses, setLikedCourses }) => {
    const clickHandler = () => {
        if (likedCourses.includes(course.id)) {
            setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
            toast.warning("like removed");
        }
        else {
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else {
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("liked Successfully");
        }
    }

    return (
        <div className='w-[18rem] bg-[#415a77] rounded-md'>
            <div className='relative'>
                <img src={course.image.url} alt={course.image.alt} className='w-[18rem] object-cover rounded-md' />
                <div className='absolute right-[4px] bottom-[-10px]  rounded-[50%] w-[2.5rem] h-[2.5rem] bg-[#ffe5d9] grid place-items-center'>
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />
                        }
                    </button>
                </div>
            </div>
            <div className='mt-3 ml-[-1.5rem] px-[2.5rem] text-white'>
                <h3>
                    {course.title}
                </h3>
            </div>
            <div className='px-[0.8rem] text-white mt-3'>
                <p>
                    {
                        course.description.length >100?
                        `${course.description.substring(0,100)}...`:
                        `${course.description}`
                    }
                </p>
            </div>
        </div>
    )
}

export default Card
