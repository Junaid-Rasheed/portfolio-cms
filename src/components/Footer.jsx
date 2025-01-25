import React from "react";

function Footer() {
  return (
    <footer class="bg-[#1c1b1b]  shadow-sm  dark:bg-gray-800">
      <div class="w-full mx-auto max-w-screen-xl p-8 md:flex md:items-center md:justify-between">
        <span class="text-md text-[#a9a9a9] sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="#" class="hover:underline">
            Maxwell Blanksby
          </a>
          . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-md  text-[#a9a9a9] dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              Projects
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              Blogs
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
