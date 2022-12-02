import React from "react";
import { BiAnalyse } from "react-icons/bi";
import { BsCalendar3EventFill } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { IoIosChatbubbles } from "react-icons/io";
const Innovative = () => {
  return (
    <div className="bg-gradient-to-t from-[#f8f9fd] to-[#f8f9fc]">
      <div className="container  mx-auto flex flex-col md:flex-row items-center justify-between md:h-screen">
        <div className="flex flex-col justify-center items-start gap-3">
          <p className="text-3xl font-bold leading-loose text-blue-500">
            INNOVATIVE SOLUTIONS
          </p>
          <p className="text-5xl font-bold leading-normal">
            The ultimate marketing <br /> resources. All in one place.
          </p>
          <p className="text-xl leading-relaxed font-medium text-[#718096]">
          Lorem ipsum dolor sit amet, consectetur magna aliqua. <br />
Eaque ipsa quae ab illo inventore veritatis. Nemo enim <br />
ipsam voluptatem voluptas.
          </p>
          <div className="flex gap-5">
          <div className="flex items-center gap-2 bg-white shadow-sm px-6 py-4 rounded-xl">
          <BiAnalyse className="text-2xl text-purple-500"/>
            <p className="text-[#2d3748] font-medium text-lg">
            Analytics
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white px-6 py-4 rounded-xl">
          <BsCalendar3EventFill className="text-2xl text-purple-500"/>
            <p className="text-[#2d3748] font-medium text-lg">
            Consultation
            </p>
          </div>
       
          </div>
          <div className="flex gap-8">
          <div className="flex items-center gap-2 bg-white shadow-sm px-6 py-4 rounded-xl">
          <TbReportAnalytics className="text-2xl text-purple-500"/>
            <p className="text-[#2d3748] font-medium text-lg">
            Reports
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white px-6 py-4 rounded-xl">
          <IoIosChatbubbles className="text-2xl text-purple-500"/>
            <p className="text-[#2d3748] font-medium text-lg">
            Live Support
            </p>
          </div>
       
          </div>
         
     
        </div>
        <img className="max-w-xl" src="/assets/business.png" alt="" />
      </div>
    </div>
  );
};

export default Innovative;
