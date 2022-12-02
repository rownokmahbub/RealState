import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-7 md:h-screen bg-gradient-to-t from-[#f8f9fc] to-[#e7ecfe]">
      <p className="text-2xl text-center text-[#2d3748] font-bold">Modern Solutions</p>
      <p className="text-5xl text-center text-[#2d3748] font-bold">Your Partner in Creating and <br /> Growing Brands</p>
      <p className="text-2xl text-center text-[#79879d]">
        Hassle-free platform and specialists to help you with your marketing
        campaigns.
      </p>
      <div className="flex text-center items-center justify-center gap-10">
            <button className="btn  rounded-full capitalize bg-purple-400 hover:bg-slate-50 hover:text-black border-none">get started</button>
            <button className="btn rounded-full shadow-sm capitalize bg-slate-50 text-purple-700 hover:text-white hover:bg-purple-400 border-none">get started</button>
      </div>
    </div>
  );
};

export default Hero;
