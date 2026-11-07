import React, { useEffect, useState } from 'react'

export const API_URL="www.themealdb.com/api/json/v1/1/";

export const useFetch = () => {
    const [data,setData]=useEffect(null);
    const [loading,setLoading]=useEffect(true);
    const [error,setError]=useState(null);

    useEffect(() => {
        try{
        if(!url){
        setLoading(false);
        return ;
        }
    const fetchData=async()=>{
        const res=await fetch(url);
        if(!res.ok) throw new Error(`Error: ${res.status}`);

        const json=res.json();
        setData(json);
    }
    fetchData();
    }
        catch(e){
            setError(e.message);
        }finally{
            setLoading(false);
        }
    
     

    }, [url])
    
    



  return (
    <div>
      
    </div>
  )
}

export default useFetch