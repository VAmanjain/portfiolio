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
    <div name="home" className="w-full h-screen bg-[#0a192f] ">
      {/* Container  */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-cols-2 justify-center items-center h-full">
        <div className=" w-full h-screen justify-center items-center grid  md:grid-cols-2 gap-2">
          <div className="w-full justify-center items-center ">
            <img
              src={Image}
              alt="profile"
              className="w-[20rem] justify-center items-center mx-16 shadow md:shadow-[#dbdce7] md:items-start w-[15rem] mx-2 mt-10 hover:w-[25rem] duration-600   "
              style={{ borderRadius: "50%" }}
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-delay="50"
            />
          </div>

          <div className="text-left">
            <p
              className="text-pink-600 z-20"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="150"
             >
              Hi, my name is
            </p>
            <h1
              className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]  "
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              Aman Jain
            </h1>
            <h2
              className="text-4xl sm:text-6xl font-bold text-[#8892b0]"
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
