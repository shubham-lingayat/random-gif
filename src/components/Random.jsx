import React from "react";
import { PulseLoader } from "react-spinners";
import useGif from "../hooks/useGif";

function Random() {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2  bg-green-500 flex flex-col items-center gap-y-5 mt-[15px] rounded-lg border border-black py-[15px]">
      <h1 className="text-2xl underline uppercase font-bold">A Random Gif</h1>
      {loading ? (
        <PulseLoader />
      ) : (
        <img src={gif} width="450" alt="Random Gif" />
      )}
      <button
        onClick={() => fetchData()}
        className="w-10/12 bg-yellow-500 text-lg rounded-lg"
      >
        Generate
      </button>
    </div>
  );
}
export default Random;
