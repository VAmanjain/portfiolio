import React from "react";
import { useLottie } from "lottie-react";
import AboutImg from "../assests/About.json";

import About from "./About";
import Skills from "./Skills";

const Hero = () => {
  const options = {
    animationData: AboutImg,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="w-[100%] h-auto tablet:p-4 py-5">
      <div className="mt-[90px] px-4">
        <div className="mx-4">
          <div className="text-yellowcolor font-bold  border border-white border-[2px] p-2 flex justify-center items-center rounded-[40px] mb-4  ">
            <h1 className="text-2xl tablet:text-3xl laptop:text-4xl text-center">Let Me Introduce myself </h1>
          </div>
          
          <div className=" container mx-auto grid laptop:grid-cols-2 ">
            <div className=" w-full text-justify h-auto order-last tablet:order-first ">
              <About />
            </div>
            <div className="flex items-center justify-center mx-auto h-auto w-[80%] laptop:w-[60%]  ">
              {View}
            </div>
          </div>
          <div className="mt-10">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
