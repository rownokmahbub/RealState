import React from "react";
import { CgPentagonRight } from "react-icons/cg";

const Business = () => {
  return (
    <div className="bg-gradient-to-t from-[#f8f9fd] to-[#f8f9fc]">
       <div className="container  mx-auto flex flex-col md:flex-row items-center justify-between md:h-screen">
      <img className="max-w-xl" src="/assets/business.png" alt="" />
      <div className="flex flex-col justify-center items-start gap-3">
        <p className="text-3xl font-bold text-blue-500">Grow you business</p>
        <p className="text-4xl font-bold">
          Tap into our unique insights <br /> to identify the right leads
        </p>
        <p className="text-lg font-medium text-[#718096]">
          Target your audience based on their interests. <br /> Lorem ipsum
          dolor sit amet, consectetur magna aliqua.
        </p>
        <div className="flex items-center gap-2">
          <CgPentagonRight className="text-4xl font-semibold text-purple-500" />
          <p className="text-[#2d3748] font-bold text-xl">
            Automatic interest detection
          </p>
        </div>
        <div className="flex items-center gap-2">
          <CgPentagonRight className="text-4xl font-semibold text-purple-500" />
          <p className="text-[#2d3748] font-bold text-xl">
          Daily email reports
          </p>
        </div>
        <div className="flex items-center gap-2">
          <CgPentagonRight className="text-4xl font-semibold text-purple-500" />
          <p className="text-[#2d3748] font-bold text-xl">
          Create & manage campaigns
          </p>
        </div>
      </div>
    </div>
    </div>
 
  );
};

export default Business;
