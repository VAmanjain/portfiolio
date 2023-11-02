import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Image from "../assests/myAvatar.png"

const Home = () => {
  return (
    <div name="home" className="w-full h-auto flex justify-center items-center tablet:p-4 text-gray-700 py-10  ">
      {/* Container  */}

      <div className="px-4 tablet:px-8 flex flex-cols-2 justify-center items-center h-full ">
        <div className=" w-full h-screen justify-start items-center grid  tablet:grid-cols-2 gap-2">
          <div className="w-full justify-center items-center py-[1.7rem] ">
            <img
              src={Image}
              alt="profile"
              className="  w-[15rem]  justify-center mx-auto my-[2rem] items-center  shadow tablet:w-[15rem] lg:w-[20rem] tablet:shadow-[#dbdce7] tablet: w-[15rem]  mt-10 lg:hover:w-[25rem]  duration-600 transform-[ease-in-out] overflow-scroll  "
              style={{ borderRadius: "50%" }}
            />
          </div>

          <div className="text-left ">
            <p
              className="text-[0.8rem] tablet:text-[1.2rem] text-[#FF0066] z-20"
             >
              Hi, my name is
            </p>
            <h1
              className=" text-[2rem]   tablet:text-4xl tablet:text-6xl font-bold text-[#ccd6f6]  "
            >
              Aman Jain
            </h1>
            <h2
              className="text-xl tablet:text-2xl tablet:text-5xl font-bold text-[#8892b0]"
            >
              I'm Front-end Developer
            </h2>
            <p
              className="text-[#8892b0] py-4 max-w-[700px]"
            >
              Hi there! 👋 Welcome to my Front-End Developer portfolio.. I love
              making websites look awesome and work super tabletoothly. Take a peek
              inside and see how I turn ideas into websites that are easy to
              use, pretty to look at, and work great on any device. Let's dive
              into my web world together! 😄🌐
            </p>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
