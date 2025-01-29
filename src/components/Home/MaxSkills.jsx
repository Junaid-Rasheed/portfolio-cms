import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image1 from "../../assets/Snaps/12.jpg";
import Image2 from "../../assets/Snaps/17.jpeg";
import Image3 from "../../assets/Snaps/19.jpeg";
import Image4 from "../../assets/Snaps/3.jpg";
import blackbg from "../../assets/backgrounds/BlackBackground.jpg";

const data = {
  id: 1,
  description:
    "Im a  high school student at Catlin Gabel School. (K-12) I have a passion for technical innovation, Artificial Intelligence, Quantum Computing, and Strategic Gaming like Chess and Magic: The Gathering.",
  author: "Meet Max",
  images: [Image1, Image2, Image3, Image4],
};

function MaxSkills() {
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
        backgroundImage: `url("${blackbg}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[url('/src/assets/pattern.png')] opacity-20"></div>
      <div className="relative max-w-5xl mx-auto text-black p-6  shadow-lg bg-white">
        <div className="p-4 rounded-2xl">
          <div className="mb-6 flex justify-center">
            <p className="text-3xl font-semibold">{data.author}</p>
          </div>
          <div className="relative w-full md:w-[85%] mx-auto flex justify-center items-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
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
              className="absolute right-0 z-10 bg-gray-700 text-white  p-2 rounded-full shadow-md hover:bg-gray-700"
            >
              <FaChevronRight
                size={35}
                className="cursor-pointer hover:text-green-400"
              />
            </button>
          </div>
        </div>
        <div className="p-5 px-20 text-left">
          <p className="mb-4  text-xl font-normal ">{data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MaxSkills;
