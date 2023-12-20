import React from 'react'
import { useState , useEffect } from 'react';


const API_KEY = "pJ1eMLE0AkMxTO8FXbpKzDsLsC6WDPS2";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

    const [gif, setGif] = useState("");
    const [isLoading , setIsLoading] = useState(false);
    const fetchData = async () => {
        setIsLoading(true);
        try{
          const res = await fetch(tag ? `${url}&tag=${tag}` : url);
          const {data} = await res.json();
          const result = data.images.downsized_large.url
          console.log(result)
          
         setGif(result);
         setIsLoading(false)
        }
        catch(error){
          console.log(error)
        }
      }

      useEffect(()=>{
        fetchData()
      },[])

      return {gif , isLoading , fetchData}
    
}

export default useGif