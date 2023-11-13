import React from "react";
import Image from "../assests/myAvatar.png";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 45, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Home = () => {

  const [text] = useTypewriter({
    words: [ "a Front end Developer","a Student", "a Designer"],
    loop: {},
  });

  return (
    <div
      name="home"
      className="w-[100%] h-auto tablet:h-screen flex justify-center items-center tablet:p-4 text-gray-700 py-10  "
    >
      {/* Container  */}

      <div className="px-4 tablet:px-8 flex flex-cols-2 justify-center items-center w-full h-full ">
        <div className=" w-full mx-auto h-screen justify-start items-center grid  tablet:grid-cols-2  tablet:gap-12">
          <div className="w-full mx-auto justify-center items-center py-[1.7rem] ">
            <Tilt options={defaultOptions}>
              {" "}
              <img
                src={Image}
                alt="profile"
                className="  w-[12rem]  justify-center mx-auto table:my-[2rem] items-center  shadow tablet:w-[15rem]  tablet:shadow-[#dbdce7]  "
                style={{ borderRadius: "50%" }}
              />
            </Tilt>
          </div>

          <div className="text-left ">
            <p className="text-[1.2rem] tablet:text-[2.5rem]   text-[#ccd6f6] z-20">
              Hi, my name is
            </p>
            <h1 className=" text-[2.2rem] tablet:mb-8 text-[#FF0066]  mb-4 tablet:text-[4rem] font-bold  ">
              AMAN JAIN
            </h1>
            <h2 className="text-[1.3rem] tablet:text-[2.5rem] font-bold text-[#ededed]">
              I'm
              <span className=" text-[#ff0066] px-2 ">{text}<Cursor cursorStyle="|"/> </span>
            </h2>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
