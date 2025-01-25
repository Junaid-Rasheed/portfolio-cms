import React from "react";
import { BsArrowDownLeftCircle } from "react-icons/bs";

function HeroBanner({ sectionName, sectionNo, pageTitle, description }) {
  return (
    <div className="bg-[#2a2a2a] w-full md:h-screen min-h-screen">
      {/* First Row */}
      <div className="flex flex-col md:flex-row justify-between items-center h-1/2 px-6 md:px-10 py-6 md:py-0">
        {/* Section Name with bigger font */}
        <div className="bg-white text-gray-800 text-2xl font-normal px-6 py-2 rounded-4xl mb-4 md:mb-0 w-full md:w-auto md:block hidden">
          {sectionName}
        </div>
        {/* Section No, hidden on small screens */}
        <div className="text-white text-[18rem] md:block hidden ">
          {sectionNo}
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row justify-between items-center h-1/2 px-6 md:px-10 py-6 md:py-0">
        {/* Page Title */}
        <div className="text-white text-[5rem] md:text-[8rem] font-extrabold w-full md:w-1/2 leading-none mb-4 md:mb-12 flex items-center">
          {pageTitle}
          <BsArrowDownLeftCircle className="ml-4 mt-44 text-[3rem] md:text-[6rem]" />
        </div>

        {/* Description with smaller font */}
        <div className="text-white text-xl max-w-lg w-full md:w-2/3 mb-4 md:mb-0 md:mt-20">
          {description}
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
