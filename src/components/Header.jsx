import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-gradient-to-r from-[#2a2a2a] to-[#1c1b1b] z-50 shadow-lg">
      <div className="w-full px-6 md:pl-12 md:pr-0 py-4">
        <nav className="flex items-center justify-start">
          {/* Hamburger Icon */}
          <button
            className="block md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-start md:space-x-8 bg-[#1c1b1b] md:bg-transparent fixed md:static top-0 left-0 w-full h-full md:w-auto md:h-auto z-40 p-8 md:p-0`}
          >
            {/* Close Icon */}
            <button
              className="absolute top-4 right-4 md:hidden text-white"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {[
              { id: "01", label: "Meet Maxwell", link: "/" },
              { id: "02", label: "My Projects", link: "/projects" },
              {
                id: "03",
                label: "Academic Achievement",
                link: "/Achievements",
              },
              {
                id: "04",
                label: "Teachers Testimonials",
                link: "/Testimonials",
              },
              { id: "05", label: "My Blog", link: "/Blogs" },
              { id: "06", label: "Gallery", link: "/Gallery" },
              { id: "07", label: "Contact Me", link: "/Contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="block relative text-left text-white text-lg md:text-base font-medium py-4 border-b border-gray-700 md:border-none transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:w-0 after:transition-all"
                onClick={closeMenu}
              >
                {item.id} - {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
