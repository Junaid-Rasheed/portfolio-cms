import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

import Image1 from "../../assets/Snaps/28.jpg";
import Image2 from "../../assets/Snaps/12.jpg";
import Image3 from "../../assets/Snaps/26.jpg";
const data = [
  {
    id: 1,
    description:
      "Max had a successful year in Honors Computer Science II. Max clearly has a great deal of programming skill and plenty of enthusiasm! Max ended the year on a high note, with particularly strong work on our final project, a navigation system that finds and displays the shortest route between two points on a map of Portland, which Max completed completely and flawlessly. (edited from 9th grade year end report June 2024).",
    author: "John Doe",
    designation: "Tech Analyst",
    image: Image1,
  },
  {
    id: 2,
    description:
      "I want to note your participation in class was a real area of strength for you this year and shouldn’t be discounted. You ask good, often important, questions. You are willing to kick off a conversation but are also willing to cede the floor to others. And I think nobody in my classes did as well at engaging in civil discourse about potentially tricky issues than you did. You make discussion meaningful by probing people’s ideas, but you always did so respectfully. (edited from 9th grade year end report June 2024).",
    author: "Jane Smith",
    designation: "Software Engineer",
    image: Image2,
  },
  {
    id: 3,
    description:
      "Max, thank you for your effort and your questions this year. You have grown a lot since the start of the school year in your maturity and scientific sophistication. Continue the hard work. It was a pleasure having you in class.",
    author: "Alice Johnson",
    designation: "AI Specialist",
    image: Image3,
  },
];

function TestimonialCard() {
  return (
    <>
      <div
        className="flex justify-center items-center "
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/804537458/vector/abstract-texture-white-and-gray-color-technology-modern-futuristic-background-vector.jpg?s=1024x1024&w=is&k=20&c=SuAQEmr6mObLvK6VLNocGCbSMc6NpRHBQB6_uFAc9Co=')",
        }}
      >
        <div className="text-[2rem] md:text-[3rem] font-semibold tracking-tighter text-center md:text-start">
          <span>In Their Words: Mentor perspectives for 2027 </span>
        </div>
      </div>
      <div
        className="min-h-[70vh] flex justify-center items-center "
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/804537458/vector/abstract-texture-white-and-gray-color-technology-modern-futuristic-background-vector.jpg?s=1024x1024&w=is&k=20&c=SuAQEmr6mObLvK6VLNocGCbSMc6NpRHBQB6_uFAc9Co=')",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full max-w-screen-xl">
          {data.map((item) => (
            <div
              key={item.id}
              className="max-w-xs mx-auto bg-gray-900 text-white  shadow-md"
            >
              <div className="p-4 rounded-2xl">
                <img
                  className="w-full h-24 object-cover "
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="p-5 text-left">
                <FaQuoteLeft className="text-gray-500 text-3xl mb-4" />

                <p className="mb-4 font-normal text-gray-400">
                  {item.description}
                </p>
                <div className="mt-6">
                  <p className="text-lg font-semibold">{item.author}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    {item.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2nd card */}
      <div className="flex justify-center items-center ">
        <div className="text-[2rem] md:text-[3rem] font-semibold tracking-tighter">
          <span>In Their Words: Mentor perspectives for 2026 </span>
        </div>
      </div>
      <div className="min-h-[70vh] flex justify-center items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full max-w-screen-xl">
          {data.map((item) => (
            <div
              key={item.id}
              className="max-w-xs mx-auto bg-gray-900 text-white  shadow-md"
            >
              <div className="p-4 rounded-2xl">
                <img
                  className="w-full h-24 object-cover "
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="p-5 text-left">
                <FaQuoteLeft className="text-gray-500 text-3xl mb-4" />

                <p className="mb-4 font-normal text-gray-400">
                  {item.description}
                </p>
                <div className="mt-6">
                  <p className="text-lg font-semibold">{item.author}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    {item.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3rd card  */}
      <div
        className="flex justify-center items-center "
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/804537458/vector/abstract-texture-white-and-gray-color-technology-modern-futuristic-background-vector.jpg?s=1024x1024&w=is&k=20&c=SuAQEmr6mObLvK6VLNocGCbSMc6NpRHBQB6_uFAc9Co=')",
        }}
      >
        <div className="text-[2rem] md:text-[3rem] font-semibold tracking-tighter">
          <span>In Their Words: Mentor perspectives for 2025 </span>
        </div>
      </div>
      <div
        className="min-h-[70vh] flex justify-center items-center "
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/804537458/vector/abstract-texture-white-and-gray-color-technology-modern-futuristic-background-vector.jpg?s=1024x1024&w=is&k=20&c=SuAQEmr6mObLvK6VLNocGCbSMc6NpRHBQB6_uFAc9Co=')",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full max-w-screen-xl">
          {data.map((item) => (
            <div
              key={item.id}
              className="max-w-xs mx-auto bg-gray-900 text-white  shadow-md"
            >
              <div className="p-4 rounded-2xl">
                <img
                  className="w-full h-24 object-cover "
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="p-5 text-left">
                <FaQuoteLeft className="text-gray-500 text-3xl mb-4" />

                <p className="mb-4 font-normal text-gray-400">
                  {item.description}
                </p>
                <div className="mt-6">
                  <p className="text-lg font-semibold">{item.author}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    {item.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4th card  */}

      <div className="flex justify-center items-center ">
        <div className="text-[2rem] md:text-[3rem] font-semibold tracking-tighter">
          <span>In Their Words: Mentor perspectives for 2024 </span>
        </div>
      </div>
      <div className="min-h-[70vh] flex justify-center items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full max-w-screen-xl">
          {data.map((item) => (
            <div
              key={item.id}
              className="max-w-xs mx-auto bg-gray-900 text-white  shadow-md"
            >
              <div className="p-4 rounded-2xl">
                <img
                  className="w-full h-24 object-cover "
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="p-5 text-left">
                <FaQuoteLeft className="text-gray-500 text-3xl mb-4" />

                <p className="mb-4 font-normal text-gray-400">
                  {item.description}
                </p>
                <div className="mt-6">
                  <p className="text-lg font-semibold">{item.author}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    {item.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5th card  */}
      <div
        className="flex justify-center items-center "
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/804537458/vector/abstract-texture-white-and-gray-color-technology-modern-futuristic-background-vector.jpg?s=1024x1024&w=is&k=20&c=SuAQEmr6mObLvK6VLNocGCbSMc6NpRHBQB6_uFAc9Co=')",
        }}
      >
        <div className="text-[2rem] md:text-[3rem] font-semibold tracking-tighter">
          <span>In Their Words: Mentor perspectives for 2023 </span>
        </div>
      </div>
      <div
        className="min-h-[70vh] flex justify-center items-center "
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/804537458/vector/abstract-texture-white-and-gray-color-technology-modern-futuristic-background-vector.jpg?s=1024x1024&w=is&k=20&c=SuAQEmr6mObLvK6VLNocGCbSMc6NpRHBQB6_uFAc9Co=')",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full max-w-screen-xl">
          {data.map((item) => (
            <div
              key={item.id}
              className="max-w-xs mx-auto bg-gray-900 text-white  shadow-md"
            >
              <div className="p-4 rounded-2xl">
                <img
                  className="w-full h-24 object-cover "
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="p-5 text-left">
                <FaQuoteLeft className="text-gray-500 text-3xl mb-4" />

                <p className="mb-4 font-normal text-gray-400">
                  {item.description}
                </p>
                <div className="mt-6">
                  <p className="text-lg font-semibold">{item.author}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    {item.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;
