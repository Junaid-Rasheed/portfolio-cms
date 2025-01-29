import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";

function AcademicAcheivement() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleRow = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      date: "January 3,2027",
      title: "Sorting Algorithm Visualization",
      tag: "Independent",
    },
    {
      date: "September 4,2023",
      title: "Radio Modulation Presentation",
      tag: "Independent ",
    },
    {
      date: "July 1,2022",
      title: "The Car Game Project",
      tag: "Independent",
    },
  ];

  return (
    <div className="h-[80vh] flex flex-col md:flex-row">
      {/* Right Column (FAQ Style) */}
      <div className="w-max md:w-full p-6 md:p-10 md:px-20 rounded-tl-4xl  overflow-y-auto space-y-8 my-auto mx-24">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-600 py-2 cursor-pointer hover:bg-green-200 transition duration-300"
            onClick={() => toggleRow(index)}
          >
            {/* Row Header */}
            <div className="flex items-center justify-between">
              {/* Date (Left Side) */}
              <div className="whitespace-nowrap text-sm md:text-base">
                <span className="py-1 px-4 bg-gray-800 text-white rounded-4xl">
                  {faq.date}
                </span>
              </div>

              {/* Title (Center) */}
              <div className="flex-1 text-center">
                <span className="font-semibold text-sm text-gray-900 md:text-lg">
                  {faq.title}
                </span>
              </div>

              {/* Tag (Right Side) */}
              <div className="whitespace-nowrap text-sm md:text-base font-light">
                <AiOutlineEye className="text-gray-600 hover:text-green-800 transition duration-300 text-2xl md:text-3xl" />
              </div>
            </div>

            {/* Collapsible Content */}
            {activeIndex === index && (
              <div className="mt-2 text-sm md:text-base ">
                Detailed information about {faq.title}. You can expand this
                section to include any relevant description or project details.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AcademicAcheivement;
