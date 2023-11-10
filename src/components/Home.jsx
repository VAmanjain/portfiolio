import React from "react";
import Image from "../assests/myAvatar.png";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-auto flex justify-center items-center tablet:p-4 text-gray-700 py-10  "
    >
      {/* Container  */}

      <div className="px-4 tablet:px-8 flex flex-cols-2 justify-center items-center h-full ">
        <div className=" w-full h-screen justify-start items-center grid  tablet:grid-cols-2 gap-2">
          <div className="w-full justify-center items-center py-[1.7rem] ">
            <Tilt options={defaultOptions}>
              {" "}
              <img
                src={Image}
                alt="profile"
                className="  w-[15rem]  justify-center mx-auto my-[2rem] items-center  shadow tablet:w-[15rem] lg:w-[20rem] tablet:shadow-[#dbdce7] tablet: w-[15rem]  mt-10 lg:hover:w-[25rem]  duration-600 transform-[ease-in-out] overflow-scroll  "
                style={{ borderRadius: "50%" }}
              />
            </Tilt>
          </div>

          <div className="text-left ">
            <p className="text-[0.8rem] tablet:text-[1.2rem]  text-[#ccd6f6] z-20">
              Hi, my name is
            </p>
            <h1 className=" text-[2rem]  text-[#FF0066]   tablet:text-4xl tablet:text-6xl font-bold  ">
              Aman Jain
            </h1>
            <h2 className="text-xl tablet:text-2xl tablet:text-5xl font-bold text-[#8892b0]">
              I'm Front-end Developer
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px] text-justify ">
              Hi there! 👋 I love making websites look awesome and work super
              tabletoothly. Take a peek inside and see how I turn ideas into
              websites that are easy to use, pretty to look at, and work great
              on any device. Let's dive into my web world together! 😄🌐
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
