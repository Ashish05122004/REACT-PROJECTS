import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner'
import useGif from '../Hook/useGif';

const RandomGif = () => {
    // const Api_key = "kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S";
    // const [gif, setGif] = useState('');
    // const [isLoading, setIsLoading] = useState(true);
    // const fetchData = async () => {
    //     try {
    //         setIsLoading(true);
    //         const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${Api_key}`);
    //         const data = await response.json();
    //         const gifUrl = data.data.images.downsized_large.url;
    //         setGif(gifUrl);
    //         setIsLoading(false);
    //     } catch (error) {
    //         console.error("Error fetching GIF:", error);
    //     }
    // };
    // useEffect(() => {
    //     fetchData();
    // }, []);

    const {gif ,isLoading, fetchData} = useGif();

    const clickHandler = () => {
        fetchData();
    };


    return (
        <div className='bg-green-500 w-[38rem] h-[18rem] mt-8 border-2 border-black rounded-md flex flex-col items-center'>
            <h1 className='font-semibold text-[1rem] underline mt-3 mb-3'>A RANDOM GIF</h1>
            {isLoading ? (<ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#000"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />) :
                (<img src={gif} alt="gif" className='w-7/12 h-[9rem] object-cover' />)
            }
            <button
                className='bg-white bg-opacity-70 w-10/12 py-1 rounded-md mt-4 mb-6'
                onClick={clickHandler}
            >
                GENERATE
            </button>
        </div>
    );
};

export default RandomGif;
