import React from "react";
import Random from "./components/Random";
import Custom from "./components/Custom";

const App = () => {
  return (
    <div className="w-full h-full flex flex-col background pb-4">
      <h1 className="bg-white rounded-lg text-center mt-[40px] py-3 mr-[25px] ml-[25px] text-3xl uppercase">
        Random Gif
      </h1>
      <div className="w-full flex flex-col items-center gap-y-10 mt-[30px]">
        <Random />
        <Custom />
      </div>
    </div>
  );
};

export default App;
