import React from 'react'

const Card = ({post}) => {
  return (
    <div className='pb-6'>
        <p className='text-lg font-bold'>{post.title}</p>
        <p className='text-xs mt-1'>By <span className=' italic'>{post.author}</span> on <span className='font-bold'>{post.category}</span></p>
        <p className='text-xs mb-2'>Posted on {post.date}</p>
        <p className='text-sm font-semibold'>
            {post.content}
        </p>
        <div>
            {
                post.tags.map((tag,index)=>{
                    return <span key={index} 
                        className='text-blue-600 font-bold text-xs underline mr-2'
                    >{`#${tag} `}</span>
                })
            }
        </div>
    </div>
  )
}

export default Card
