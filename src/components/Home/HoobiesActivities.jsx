import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image1 from "../../assets/Snaps/12.jpg";
import Image2 from "../../assets/Snaps/17.jpeg";
import Image3 from "../../assets/Snaps/19.jpeg";
import Image4 from "../../assets/Snaps/3.jpg";
import whitebg from "../../assets/backgrounds/WhiteTech.jpg";

const data = {
  id: 1,
  description:
    "Id consider myself a “Strategic Thinker” Strategic Gaming like Chess and Magic: The Gathering and video gaming have been consistent activities in my life. Chess.com is something I play on for many hours a week. Its how I relax. I also play basketball. I am also a gamer. Ive been ranked pretty high! Ive always loved animals. We have a dog who is very cute. Her name is Moose.",
  author: "Hobbies and Activities",
  images: [Image1, Image2, Image3, Image4],
};

function HoobiesActivities() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.images.length - 2 : prevIndex - 2
    );
    a;
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= data.images.length - 2 ? 0 : prevIndex + 2
    );
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center relative bg-gray-900"
      style={{
        backgroundImage: `url("${whitebg}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[url('/src/assets/pattern.png')] opacity-20"></div>
      <div className="relative max-w-5xl mx-auto text-white p-6  shadow-lg bg-gray-900">
        <div className="p-4 rounded-2xl">
          <div className="mb-6 flex justify-center">
            <p className="text-3xl font-semibold">{data.author}</p>
          </div>
          <div className="relative w-full md:w-[85%] mx-auto flex justify-center items-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
            >
              <FaChevronLeft
                size={35}
                className="cursor-pointer hover:text-green-400"
              />
            </button>
            <div className="flex w-full max-w-xl gap-x-8">
              <img
                className="w-1/2 h-56 object-cover "
                src={data.images[currentIndex]}
                alt={`${data.author} ${currentIndex + 1}`}
              />
              <img
                className="w-1/2 h-56 object-cover "
                src={data.images[(currentIndex + 1) % data.images.length]}
                alt={`${data.author} ${currentIndex + 2}`}
              />
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 bg-gray-800 text-white  p-2 rounded-full shadow-md hover:bg-gray-700"
            >
              <FaChevronRight
                size={35}
                className="cursor-pointer hover:text-green-400"
              />
            </button>
          </div>
        </div>
        <div className="p-5 px-20 text-left">
          <p className="mb-4  text-xl font-normal text-white">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HoobiesActivities;
