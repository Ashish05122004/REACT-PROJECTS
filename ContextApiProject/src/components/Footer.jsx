import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {
    const { page, totalPages, handlePage } = useContext(AppContext);
    return (
        <div className=' py-1 shadow-lg border-t-gray-400 border-t-2  w-full flex justify-center fixed bottom-0 bg-white '>
            <div className=' flex justify-between py-2 w-full max-w-[670px]'>
            <div>
                {page >1 &&
                    <button 
                        onClick={() => handlePage(page - 1)}
                        className='border-gray-400 border-2 px-1 rounded-md mr-2'
                    >Previous</button>
                }
                {page < totalPages &&
                    <button 
                        onClick={() => handlePage(page + 1)}
                        className='border-gray-400 border-2 px-1 rounded-md' 
                    >Next</button>
                }
            </div>
            <div>
                <span>{`page ${page} of ${totalPages}`}</span>
            </div>
        </div>
        </div>
    )
}

export default Footer
