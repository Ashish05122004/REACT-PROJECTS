import React from 'react'

const Filter = ({ filterData,category,setCategory }) => {

    const filterHandler = (title) =>{
        setCategory(title);
    }
    return (
        <div className='text-white flex flex-wrap gap-3'>
            {
                filterData.map((data) => {
                    return (
                        <button key={data.id} 
                        className={`bg-[#1b263b] py-2 px-2 rounded-md transition-all duration-200
                        ${category===data.title ? "bg-opacity-80 border-2":"bg-opacity-30 border-transparent"}`}
                        onClick={()=>filterHandler(data.title)}>
                            {data.title}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Filter
