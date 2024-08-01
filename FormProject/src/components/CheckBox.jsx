import React from 'react'

const CheckBox = ({ title, description,id,name,checked,changeHandler}) => {
    return (
        <div className='flex gap-4'>
            <input
                type="checkbox"
                id={id}
                name={name}
                onChange={changeHandler}
                checked={checked}
                className='mb-6'
            />
            <label htmlFor={id}>
                <p className=' font-semibold'>{title}</p>
                <p>{description}</p>
            </label>
        </div>
    )
}

export default CheckBox
