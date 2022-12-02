import React from "react";

const Result = () => {
  return (
    <div className="bg-gradient-to-t from-[#f8f9fd] to-[#f8f9fc] md:h-screen">
      <div className="container  mx-auto  flex flex-col gap-5 px-20 justify-center items-center bg-white py-10 rounded-2xl">
        <p className="text-3xl font-bold text-gray-500">HIGH IMPACT RESULTS</p>
        <p className="text-4xl font-bold text-purple-500">
          Strategies Focused on Your Performance
        </p>
        <p className="text-2xl font-medium text-gray-500">
          Understand First. Lorem ipsum dolor sit amet.
        </p>
        <p className="text-2xl font-medium text-gray-500">
          We help our clients achieve tangible, high-impact results.
        </p>

        <div className="flex items-center gap-20 mt-10">
            <div className="flex flex-col items-center">
                <p className="font-bold text-5xl">450</p>
                <p className="text-gray-700 font-medium text-2xl">Leads Generated</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-bold text-5xl">450</p>
                <p className="text-gray-700 font-medium text-2xl">Leads Generated</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-bold text-5xl">450</p>
                <p className="text-gray-700 font-medium text-2xl">Leads Generated</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-bold text-5xl">450</p>
                <p className="text-gray-700 font-medium text-2xl">Leads Generated</p>
            </div>
        </div>
        <button className="btn bg-purple-600 rounded-full border-none capitalize btn-lg mt-5">Schedule a Call</button>
      </div>
    </div>
  );
};

export default Result;
