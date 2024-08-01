import React from 'react'

const input = ({id,type,name,value,changeHandler,title,placeholder}) => {
    return (
        <div className=' ml-8'>
            <label htmlFor={id}>{title}</label> <br />
            <input
                type={type}
                id={id}
                name={name}
                onChange={changeHandler}
                value={value}
                className='border-2 px-2 w-11/12 rounded-md border-t-blue-300'
                placeholder={placeholder}
            />
        </div>
    )
}

export default input
