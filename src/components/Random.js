import React, { useEffect, useState } from "react";
import axios from "axios";
import { FadeLoader } from "react-spinners";
import useGif from "../hooks/useGif";



const API_KEY = "pJ1eMLE0AkMxTO8FXbpKzDsLsC6WDPS2";
const Random = () => {

  const {gif , isLoading , fetchData} = useGif();

  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-2xl underline uppercase font-bold mt-[15px]">a random gif</h1>
      {
        isLoading ? (
          <FadeLoader color="#36d7b7" />
        ) : (
          <img src={gif} width={450}  alt="random gif"/>
        ) 
      }

      <button onClick={()=>{fetchData()}} className="w-10/12 bg-white opacity-85 text-lg py-2 rounded-lg mb-[15px]">generate</button>
    </div>
  );
};

export default Random;
