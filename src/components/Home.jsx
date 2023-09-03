import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Image from "../assests/my.png";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] ">
      {/* Container  */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-cols-2 justify-center items-center h-full">
        <div className=" w-full h-screen justify-center items-center grid  md:grid-cols-2 gap-2">
          <div className="w-full justify-center items-center ">

            <img src={Image} alt="profile" className="w-[20rem] justify-center items-center mx-16 shadow md:shadow-[#dbdce7] md:items-start mx-2 mt-10 " style={{borderRadius:"50%"}} />
          </div>

          <div className="text-left">
            <p className="text-pink-600">Hi, my name is </p>
            <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6] ">
              Aman Jain
            </h1>
            <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
              I'm Front-end Developer
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              inventore quisquam autem, tempore alias incidunt assumenda nobis
              quidem nulla tenetur.
            </p>
            <div>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 ">
                View Work
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
