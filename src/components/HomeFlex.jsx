import React from "react";

function HomeFlex() {
  return (
    <div className="h-screen flex bg-[#f8f8f8]">
      {/* Left Column (Image) */}
      <div
        className="w-1/2 bg-cover bg-center m-10 rounded-2xl"
        style={{
          backgroundImage:
            "url(https://www.3dreid.com/wp-content/uploads/2023/01/3dreid-farnborough-airport-001158-n272-1050x861.jpg)",
        }}
      >
        {/* This part can contain more elements if needed */}
      </div>

      {/* Right Column (Text) */}
      <div className="w-1/2 flex items-end justify-center p-4  ">
        <div className="text-gray-900 text-5xl md:text-6xl  font-semibold mb-14">
          <p>Innovative Mind</p>
          <p>Strategic Thinker</p>
          <p className="text-gray-500">STEM Enthusiast.</p>
          <div className="text-gray-900 mx-auto  text-2xl font-normal px-6 py-2 mt-10 cursor-pointer tracking-widest w-xs outline-solid">
            Explore My Projects
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFlex;
