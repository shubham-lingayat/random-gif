import React, { useState } from "react";
import { PulseLoader } from "react-spinners";
import useGif from "../hooks/useGif";


function Tag() {
  const [tag, setTag] = useState("car");
  const {gif, loading, fetchData} = useGif(tag);

  return (
    <div className="w-1/2  bg-blue-500 flex flex-col items-center gap-y-5 mt-[15px] rounded-lg border border-black py-[15px]">
      <h1 className="text-2xl underline uppercase font-bold">Random {tag} Gif</h1>
      {loading ? (
        <PulseLoader />
      ) : (
        <img src={gif} width="450" alt="Random Gif" />
      )}
      <input
        className="w-10/12 text-lg py-2 rounded-lg text-center"
        onChange={(event)=>setTag(event.target.value)}
      />
      <button
        onClick={()=>fetchData(tag)}
        className="w-10/12 bg-yellow-500 text-lg rounded-lg"
      >
        Generate
      </button>
    </div>
  );
}
export default Tag;
