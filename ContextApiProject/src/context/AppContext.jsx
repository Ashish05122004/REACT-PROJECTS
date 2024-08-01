import { createContext, useState } from "react";
import { baseUrl } from "../BaseUrl";

//step 1: create context
export const AppContext = createContext();

export const AppContextProvider = ({children})=>{
    const [loading,setLoading] =useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);

    // data filling
    const fetchPosts = async (page=1, tag=null, category)=>{
        try {
            setLoading(true);
            let url=`${baseUrl}?page=${page}`;
            if(tag){
                url += `&tag=${tag}`;
            }
            if(category){
                url += `&category=${category}`;
            }
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            setPosts(data.posts);
            setPage(data.page);
            setTotalPages(data.totalPages);
        }
        catch(error){
            alert(error);
            setPosts([]);
            setPage(1);
            setTotalPages(null);
        }
        setLoading(false);
    }

    const handlePage = (page) =>{
        setPage(page);
        fetchPosts(page);
    }

    const value ={
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchPosts,
        handlePage
    }

    // step 2: data provider
    return (
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
    )
}