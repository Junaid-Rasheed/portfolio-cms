import React from "react";
import { BsArrowDownLeftCircle } from "react-icons/bs";

function HomeKeyAchievement() {
  return (
    <div className="h-screen flex flex-col  bg-[#f8f8f8] ">
      <div className="text-gray-900 outline-solid outline-gray-900  text-2xl font-normal px-6 py-2 rounded-4xl mb-4 md:mb-0 w-full md:w-48 md:block hidden mt-10 ml-10">
        Achievements
      </div>
      {/* Three Columns */}
      <div className="flex flex-1 mx-20">
        {/* Column 1 */}
        <div className="flex-1 mx-10 flex flex-col items-start justify-center">
          <span className="text-xl font-bold bg-gray-800 px-4 py-2 rounded-4xl text-white">
            1
          </span>
          <p className="mt-2 text-gray-800 text-4xl font-semibold text-start">
            Built a sorting algorithm <br />
            <span className="text-gray-500">for visualizing data systems.</span>
          </p>
        </div>
        {/* Column 2 */}
        <div className="flex-1 mx-10 flex flex-col items-start justify-center ">
          <span className="text-xl font-bold bg-gray-800 px-4 py-2 rounded-4xl text-white">
            2
          </span>
          <p className="mt-2 text-gray-800 text-4xl font-semibold text-start">
            Presented AM Radio Modulation <br />
            <span className="text-gray-500">in a live seminar session. </span>
          </p>
        </div>
        {/* Column 3 */}
        <div className="flex-1 mx-10 flex flex-col items-start justify-center ">
          <span className="text-xl font-bold bg-gray-800 px-4 py-2 rounded-4xl text-white">
            3
          </span>
          <p className="mt-2 text-gray-800 text-4xl font-semibold text-start">
            Participated in Knowledge Society <br />
            <span className="text-gray-500">program on innovation skills.</span>
          </p>
        </div>
      </div>

      {/* Full-Width Line */}
      <div className="py-4 text-center ">
        <p className="text-3xl md:text-[5rem] font-semibold">
          <span className="text-gray-900">Inspiring Growth </span>
          <span className="text-gray-600 font-semibold text-stroke">
            and Learning.
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default HomeKeyAchievement;
