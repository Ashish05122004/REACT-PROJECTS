import React from 'react'
import { useState,useEffect } from 'react';

const Api_key = "kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S";
const url=`https://api.giphy.com/v1/gifs/random?api_key=${Api_key}`;

const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async (tag) => {
        try {
            setIsLoading(true);
            const response = await fetch(tag ? `${url}&tag=${tag}` : url);
            const data = await response.json();
            const gifUrl = data.data.images.downsized_large.url;
            setGif(gifUrl);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching GIF:", error);
        }
    };
    useEffect(() => {
        fetchData(tag);
    }, []);

    return {gif , isLoading ,fetchData}
}

export default useGif
