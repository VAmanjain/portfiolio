import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Image from "../assests/my.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
AOS.refresh();
AOS.refreshHard();
const Home = () => {
  return (
    <div name="home" className="w-full h-auto  bg-[#0a192f] flex justify-center items-center md:p-4 text-gray-700 py-10  ">
      {/* Container  */}

      <div className="max-w-[1000px]  px-4 sm:px-8 flex flex-cols-2 justify-center items-center h-full ">
        <div className=" w-full h-screen justify-start items-center grid  md:grid-cols-2 gap-2">
          <div className="w-full justify-center items-center py-[1.7rem] ">
            <img
              src={Image}
              alt="profile"
              className="w-[12rem]  justify-center mx-auto my-[2rem] items-center  shadow sm:w-[15rem] lg:w-[20rem] md:shadow-[#dbdce7] md: w-[15rem]  mt-10 lg:hover:w-[25rem]  duration-600    "
              style={{ borderRadius: "50%" }}
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-delay="50"
            />
          </div>

          <div className="text-left ">
            <p
              className="text-[0.8rem] sm:text-[1.2rem] text-pink-600 z-20"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="150"
             >
              Hi, my name is
            </p>
            <h1
              className=" text-[2rem]   md:text-4xl sm:text-6xl font-bold text-[#ccd6f6]  "
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              Aman Jain
            </h1>
            <h2
              className="text-xl sm:text-2xl md:text-5xl font-bold text-[#8892b0]"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="450"
            >
              I'm Front-end Developer
            </h2>
            <p
              className="text-[#8892b0] py-4 max-w-[700px]"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              Hi there! 👋 Welcome to my Front-End Developer portfolio.. I love
              making websites look awesome and work super smoothly. Take a peek
              inside and see how I turn ideas into websites that are easy to
              use, pretty to look at, and work great on any device. Let's dive
              into my web world together! 😄🌐
            </p>
            <div>
              <button
                className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 "
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="750"
              >
                Let's Started
                <span className="group-hover:rotate-90 duration-300b">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
