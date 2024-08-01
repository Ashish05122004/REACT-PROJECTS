import React from 'react'
import Card from './Card'

export default function Tour({ tours,removeTour }) {
    return (
        <div className='flex justify-center items-center flex-col mx-auto max-w-[1080px]'>
            <div>
                <h2 
                className=' rounded-md text-[3rem] my-[6vh] border-[7px] border-[rgb(1,17,160)] border-dashed px-10 py-1'
                >Plan With Love</h2>
            </div>
            <div className='flex flex-wrap justify-center gap-5'>
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} id={tour.id} name={tour.name} price={tour.price} info={tour.info} image={tour.img} removeTour={removeTour}></Card>  
                    })
                }
            </div>
        </div>
    )
}
