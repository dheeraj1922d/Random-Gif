import React, { useEffect, useState } from "react";
import axios from "axios";
import { FadeLoader } from "react-spinners";
import useGif from "../hooks/useGif";



const API_KEY = "pJ1eMLE0AkMxTO8FXbpKzDsLsC6WDPS2";
const Custom = () => {

  const [tag , setTag] = useState("");
  const {gif , isLoading , fetchData} = useGif(tag);


  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-2xl underline uppercase font-bold mt-[15px]">a random <span>{tag}</span> gif</h1>
      {
        isLoading ? (
          <FadeLoader color="#36d7b7" />
        ) : (
          <img src={gif} width={450}  alt="random gif"/>
        ) 
      }

      <input
      type="text"
      value={tag}
      className="w-10/12 text-lg py-2 border border-black rounded-lg text-center"
      onChange={(event)=>{setTag(event.target.value)}}
   
      />
      <button onClick={()=>{fetchData()}} className="w-10/12 bg-white opacity-85 text-lg py-2 rounded-lg mb-[15px]">generate</button>
    </div>
  );
};

export default Custom;
