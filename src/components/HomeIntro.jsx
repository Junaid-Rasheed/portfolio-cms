import React from "react";

function HomeIntro() {
  return (
    <div className="bg-[#2a2a2a] w-full md:h-screen min-h-screen">
      {/* <div className="bg-white text-black text-2xl font-normal px-6 py-2 rounded-4xl mb-4 md:mb-0 w-full md:w-auto md:block hidden">
        sectionName
      </div> */}
      {/* First Row */}
      <div className="flex flex-col md:flex-row justify-between items-center h-1/2 px-6 md:px-10 py-6 md:py-0">
        {/* Section Name with bigger font */}
        <div className="text-white text-2xl md:text-5xl font-semibold w-full md:w-1/2 leading-none mb-4 md:mb-12 mt-30 ">
          A high school student with a passion for technical innovation,
          artificial intelligence, quantum computing,
          <span className="text-[#a9a9a9]">
            &nbsp;and strategic gaming—such as Chess and Magic: The Gathering.
          </span>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row justify-between items-center h-1/2 px-6 md:px-10 py-6 md:py-0">
        {/* Description with smaller font */}
        <div className=" text-xl max-w-lg w-full md:w-2/3 mb-4 md:mb-0">
          <div className="text-white mx-auto  text-2xl font-normal px-6 py-2 mt-10 cursor-pointer tracking-widest w-xs outline-solid">
            How I spend time?
          </div>
        </div>
        {/* Page Title */}
        <div className="text-white text-[2rem] md:text-[4rem] font-extrabold w-full md:w-1/2 leading-none mb-4 md:mb-12 ">
          Consistent Dedicated{" "}
          <span className="text-[#a9a9a9] outline-double">Curious.</span>
        </div>
      </div>
    </div>
  );
}

export default HomeIntro;
