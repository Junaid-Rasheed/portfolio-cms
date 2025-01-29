import React from "react";

function HeroBanner({ pageTitle, Imagee, Subtitle }) {
  return (
    <div className="bg-[#2a2a2a] w-full min-h-[68vh] md:min-h-[85vh] flex flex-col md:flex-row">
      {/* Left Column */}
      <div className="flex flex-col justify-between p-6 md:w-1/2 text-white md:pb-4 pl-6 md:pl-14">
        {/* Big Page Title at the bottom */}
        <div className="text-[3rem] md:text-[3rem] xl:text-[4rem] font-semibold leading-tight mt-auto text-nowrap">
          {pageTitle} <br /> {Subtitle}
        </div>
      </div>

      {/* Right Column */}
      <div
        className="md:w-1/2 flex flex-col justify-end bg-cover bg-center p-6 min-h-[50vh] md:min-h-full "
        style={{
          backgroundImage: `url(${Imagee})`,
        }}
      ></div>
    </div>
  );
}

export default HeroBanner;
