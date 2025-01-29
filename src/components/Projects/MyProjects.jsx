import React from "react";

import Image1 from "../../assets/Snaps/11.jpg";
import Image2 from "../../assets/Snaps/12.jpg";
import Image3 from "../../assets/Snaps/26.jpg";
import Image4 from "../../assets/Snaps/25.jpg";

const data = [
  {
    id: 1,
    date: "22 January 2023",
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    image: Image1,
  },
  {
    id: 2,
    date: "22 January 2023",

    title: "Top 10 programming languages to learn",
    description:
      "Discover the most in-demand programming languages of 2023 for career growth.",
    image: Image2,
  },
  {
    id: 3,
    date: "22 January 2023",

    title: "AI advancements in 2023",
    description:
      "Explore the latest breakthroughs in artificial intelligence shaping the future.",
    image: Image3,
  },
  {
    id: 4,
    date: "22 January 2023",

    title: "AI advancements in 2023",
    description:
      "Explore the latest breakthroughs in artificial intelligence shaping the future.",
    image: Image4,
  },
  {
    id: 5,
    date: "22 January 2023",

    title: "AI advancements in 2023",
    description:
      "Explore the latest breakthroughs in artificial intelligence shaping the future.",
    image: Image2,
  },
  {
    id: 6,
    date: "22 January 2023",

    title: "AI advancements in 2023",
    description:
      "Explore the latest breakthroughs in artificial intelligence shaping the future.",
    image: Image3,
  },
  {
    id: 7,
    date: "22 January 2023",

    title: "AI advancements in 2023",
    description:
      "Explore the latest breakthroughs in artificial intelligence shaping the future.",
    image: Image4,
  },
  {
    id: 8,
    date: "22 January 2023",

    title: "AI advancements in 2023",
    description:
      "Explore the latest breakthroughs in artificial intelligence shaping the future.",
    image: Image1,
  },
  {
    id: 9,
    date: "22 January 2023",

    title: "AI advancements in 2023",
    description:
      "Explore the latest breakthroughs in artificial intelligence shaping the future.",
    image: Image2,
  },
  {
    id: 10,
    date: "22 January 2023",

    title: "AI advancements in 2023",
    description:
      "Explore the latest breakthroughs in artificial intelligence shaping the future.",
    image: Image3,
  },
];

function MyProjects() {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="text-[2rem] md:text-[3rem] font-semibold tracking-tighter text-center md:text-start">
          <span>
            "The cave you fear to enter holds the treasure you seek". JC
          </span>
          {/* <span className="text-gray-500"> saying year - 2024</span> */}
        </div>
      </div>
      <div className="min-h-[70vh]  flex justify-center items-center pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full max-w-screen-xl">
          {data.map((item) => (
            <div
              key={item.id}
              className="max-w-xs mx-auto bg-gray-900 text-white  my-4 shadow-md "
            >
              <a href="#">
                <img
                  className="w-full h-48 object-cover "
                  src={item.image}
                  alt={item.title}
                />
              </a>
              <div className="p-5 hover:text-green-300">
                <a href="#">
                  <p className="mb-2  font-thin tracking-tight">{item.date}</p>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-400 hover:text-green-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyProjects;
