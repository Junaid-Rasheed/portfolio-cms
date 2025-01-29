import React from "react";
import { MdMailOutline, MdMail } from "react-icons/md"; // Importing mail and other icons
import { TbMailShare } from "react-icons/tb";
import whitebg from "../../assets/backgrounds/WhiteTech.jpg";

function ContactForm() {
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
          <span>Want to collaborate or discuss STEM projects? </span>
          <br />
          <span className="text-[2rem] font-normal">
            Get in touch with me here by filling out this form!{" "}
          </span>
        </div>
      </div>

      <div
        className="w-full h-[80vh]  flex items-center justify-center"
        style={{
          backgroundImage: `url("${whitebg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full md:w-[90%] lg:w-4/5 bg-gray-800 text-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3">
          {/* Form Section */}
          <div className="p-4 flex flex-col items-center justify-center bg-gray-800 col-span-2">
            <form className="w-full">
              {/* <div className="text-center mb-8">
              <TbMailShare className="text-white text-4xl" />
            </div> */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 px-4 md:py-12 md:px-8 text-sm">
                <div className="flex flex-col gap-1">
                  <label className="font-semibold">
                    Name <span className="text-red-500">&#42;</span>
                  </label>
                  <input
                    className="border-[1px] border-white bg-gray-800 p-2 rounded-md"
                    placeholder="Enter Your Name"
                    required
                    name="name"
                    type="text"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-semibold">
                    Email <span className="text-red-500">&#42;</span>
                  </label>
                  <input
                    className="border-[1px] border-white bg-gray-800 p-2 rounded-md"
                    placeholder="Enter Your Email"
                    required
                    name="email"
                    type="email"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-semibold">
                    Phone <span className="text-red-500">&#42;</span>
                  </label>
                  <input
                    className="border-[1px] border-white bg-gray-800 p-2 rounded-md"
                    placeholder="Enter Your Phone Number"
                    required
                    name="phone"
                    type="tel"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-semibold">
                    Subject <span className="text-red-500">&#42;</span>
                  </label>
                  <input
                    className="border-[1px] border-white bg-gray-800 p-2 rounded-md"
                    placeholder="Enter Your Subject"
                    required
                    name="subject"
                    type="text"
                  />
                </div>

                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className="font-semibold">
                    Message <span className="text-red-500">&#42;</span>
                  </label>
                  <input
                    className="border-[1px] border-white bg-gray-800 p-2 rounded-md"
                    placeholder="Enter Your Message"
                    required
                    name="subject"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex justify-center py-4">
                <button className="py-2 px-18 bg-gray-800 hover:bg-green-300 hover:text-black hover:border-black rounded-md border-2 border-white hover:scale-95 transition-all">
                  <span className="text-xl">Submit</span>
                  {/* //<MdTelegram className="text-white text-2xl ml-2" /> */}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="py-6 px-4 h-full bg-[#2a2a2a] text-center flex flex-col items-center justify-center">
            {/* <div>Get in touch with me here by filling out this form</div> */}
            <div className="flex flex-col items-center mb-8">
              <TbMailShare className="text-white text-3xl mb-4" />
              <span>max@maxwellblanksby.com</span>
            </div>

            <div className="flex gap-4 mb-6">
              <a href="#" title="youtube">
                <img
                  className="h-8 w-8 invert"
                  src="https://www.svgrepo.com/show/521936/youtube.svg"
                  alt="YouTube"
                />
              </a>
              <a href="#" title="linkedin">
                <img
                  className="h-12 w-12 invert"
                  src="https://www.svgrepo.com/show/520815/linkedin.svg"
                  alt="LinkedIn"
                />
              </a>
              <a href="#" title="instagram">
                <img
                  className="h-8 w-8 invert"
                  src="https://www.svgrepo.com/show/521711/instagram.svg"
                  alt="Instagram"
                />
              </a>
              <a href="#" title="github">
                <img
                  className="h-8 w-8 invert"
                  src="https://www.svgrepo.com/show/512317/github-142.svg"
                  alt="GitHub"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
