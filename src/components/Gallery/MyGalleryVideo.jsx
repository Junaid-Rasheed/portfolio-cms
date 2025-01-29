import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Video1 from "../../assets/videos/GivingBack.mov";
import Video2 from "../../assets/videos/OpeningMagicDeck.mov";
import Video3 from "../../assets/videos/GivingBack.mov";
import Video4 from "../../assets/videos/OpeningMagicDeck.mov";

import blackbg from "../../assets/backgrounds/BlackBackground.jpg";

const slides = [Video1, Video2, Video3, Video4];

function MyGalleryVideo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  //   useEffect(() => {
  //     const interval = setInterval(nextSlide, 5000);
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <>
      <div
        className="flex justify-center items-center "
        style={{
          backgroundImage: `url("${blackbg}")`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-[2rem] md:text-[3rem] text-white font-semibold leading-tight text-center md:text-start my-20 md:my-0">
          <span>Videos</span>
          <br />
        </div>
      </div>
      <div
        className="flex justify-center items-center min-h-screen bg-gray-100 pb-10"
        style={{
          backgroundImage: `url("${blackbg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-4/5 h-[500px] bg-white shadow-lg rounded-lg overflow-hidden relative">
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((src, index) => (
              <video
                key={index}
                src={src}
                className="w-full h-full flex-shrink-0 object-contain"
                autoPlay
                loop
                muted
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:text-green-400 hover:cursor-pointer shadow-lg"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg hover:text-green-400 hover:cursor-pointer"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </>
  );
}

export default MyGalleryVideo;
