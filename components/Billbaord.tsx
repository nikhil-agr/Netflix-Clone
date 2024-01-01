import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

import useBillboard from "@/hooks/useBillboard";

const Billbaord = () => {
  const { data } = useBillboard();
  return (
    <div className="relative h-[56.25vw]">
      <video poster={data?.thumbnailUrl} className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500" autoPlay muted loop src={data?.videoUrl}></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p
          className="
            text-1xl 
            md:text-5xl 
            h-full 
            w-[50%] 
            lg:text-6xl 
            font-bold 
            drop-shadow-xl
          "
        >
          {data?.title}
        </p>
        <p className="text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl ">
          {data?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button
            className="
            bg-white/[.4]
            rounded-md 
            py-1 md:py-2 
            px-2 md:px-4 
            w-auto 
            text-xs lg:text-l 
            font-semibold
            flex
            flex-row
            items-center
            hover:bg-white/[.60]
            transition
          "
          >
            <AiOutlineInfoCircle className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billbaord;
