import React, { useContext,useEffect } from 'react'
import { AppContext } from '../context/AppContext';
import Card from './Card';
import Spinner from './Spinner';

const Blogs = () => {
    const { posts, loading, fetchPosts, page} = useContext(AppContext);

    useEffect(()=>{
        fetchPosts(page);
    },[]);

    return (
        <div className='max-w-[670px] mb-[5rem] mt-[3rem] w-full min-h-screen flex flex-col items-center justify-center'>
            {
                loading ?
                    (<Spinner />) :
                    (posts.length === 0 ?
                        (
                            <div>
                                <h1>No Page Found!!</h1>
                            </div>
                        ):
                        (
                            posts.map((post) => {
                                return (<Card key={post.id} post={post}/>)
                            })
                        )
                    )
            }
        </div>
    )
}

export default Blogs
