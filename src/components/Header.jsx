import React from "react";

function Header() {
  return (
    <div className="sticky top-0 bg-[#2a2a2a] flex items-center justify-center z-50">
      <div className="bg-[#1c1b1b] rounded-lg p-5 w-full mt-4 md:w-3/4">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-white space-x-2">
            <span className="text-xl font-semibold">portfolio.</span>
          </div>

          <div className="text-white space-x-6 font-medium">
            <a href="#" className="hover:text-[#a9a9a9]">
              Home
            </a>
            <a href="#" className="hover:text-[#a9a9a9]">
              About
            </a>
            <a href="#" className="hover:text-[#a9a9a9]">
              Services
            </a>
            <a href="#" className="hover:text-[#a9a9a9]">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
