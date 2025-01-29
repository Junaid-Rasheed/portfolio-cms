import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image1 from "../../assets/Snaps/2.jpg";
import Image2 from "../../assets/Snaps/11.jpg";
import Image3 from "../../assets/Snaps/22.jpg";
import Image4 from "../../assets/Snaps/29.jpg";
import whitebg from "../../assets/backgrounds/WhiteTech.jpg";

const slides = [Image1, Image2, Image3, Image4];

function MyGalleryImage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="flex justify-center items-center "
        style={{
          backgroundImage: `url("${whitebg}")`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-[2rem] md:text-[3rem] font-semibold leading-tight text-center md:text-start my-20 md:my-0">
          <span>Images</span>
          <br />
        </div>
      </div>
      <div
        className="flex justify-center items-center min-h-screen bg-gray-100 pb-10"
        style={{
          backgroundImage: `url("${whitebg}")`,
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
              <img
                key={index}
                src={src}
                className="w-full h-full flex-shrink-0 object-cover"
                alt={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg hover:text-green-400 hover:cursor-pointer"
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

export default MyGalleryImage;
