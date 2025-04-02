import React, { useEffect } from "react";
import { useLottie } from "lottie-react";
import AboutImg from "../assests/About.json";

import About from "./About";
import Skills from "./Skills";

const Hero = () => {
  const options = {
    animationData: AboutImg,
    loop: true,
  };

  useEffect
  (()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',})
  }, [])


  const { View } = useLottie(options);

  return (
    <div className="w-[100%] h-auto tablet:p-4 py-5">
      <div className="mt-[90px] px-4">
        <div className="mx-4">
          <div className="text-yellowcolor font-bold  border-[2px] border-white p-2 flex justify-center items-center rounded-[40px] mb-4  ">
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
            {/* Hackathon Experience Section */}
        <div className="w-full mt-12 mb-6">
          <h1 className="text-textcolor font-bold text-[1.5rem] mb-4 border-b border-light-bluecolor pb-2">
            My Hackathon Experience
          </h1>
          <p className="text-textcolor font-semibold text-[1rem] py-2 text-justify">
            Hackathons have been a crucial part of my journey, pushing me to innovate, collaborate, and build real-world solutions under intense time constraints. Through these experiences, I have explored emerging technologies, refined my problem-solving skills, and worked alongside talented developers.
          </p>
        </div>

        {/* Timeline Design for Hackathons */}
        <div className="w-full relative">
          <div className="absolute left-[0.6rem] top-0 bottom-0 w-1 bg-light-bluecolor"></div>

          {/* SIH 2024 */}
          <div className="ml-12 mb-8 relative">
            <div className="absolute -left-12 w-6 h-6 rounded-full bg-light-bluecolor flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-black"></div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg exp">
              <h2 className="text-light-bluecolor font-bold text-[1.2rem]">
                Smart India Hackathon (SIH) 2024
              </h2>
              <p className="text-silver text-sm mb-2  ">December 2024</p>
              <p className="text-textcolor font-semibold text-[1.1rem]">
                Built a <span className="text-light-bluecolor">career counseling website</span> that helps students make informed academic and career choices.
              </p>
            </div>
          </div>

          {/* Web-a-thon at MNIT */}
          <div className="ml-12 mb-8 relative">
            <div className="absolute -left-12 w-6 h-6 rounded-full bg-light-bluecolor flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-black"></div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg exp">
              <h2 className="text-light-bluecolor font-bold text-[1.2rem]">
                Web-a-thon at MNIT
              </h2>
              <p className=" text-silver text-gray-400 text-sm mb-2  ">November 2024</p>
              <p className="text-textcolor font-semibold text-[1.1rem]">
                Developed a <span className="text-light-bluecolor">freelancing website for gig workers</span> with blockchain integration, enhancing transparency and security.
              </p>
            </div>
          </div>

          {/* Hack India */}
          <div className="ml-12 mb-8 relative">
            <div className="absolute -left-12 w-6 h-6 rounded-full bg-light-bluecolor flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-black"></div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg exp">
              <h2 className="text-light-bluecolor font-bold text-[1.2rem]">
                Hack India
              </h2>
              <p className=" text-silver text-gray-400 text-sm mb-2  ">October 2024</p>
              <p className="text-textcolor font-semibold text-[1.1rem]">
                A <span className="text-light-bluecolor">blockchain-focused hackathon</span> where I built a solution to help recruiters find skilled candidates efficiently.
              </p>
            </div>
          </div>

          {/* SIH Internal Round */}
          <div className="ml-12 mb-8 relative">
            <div className="absolute -left-12 w-6 h-6 rounded-full bg-light-bluecolor flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-black"></div>
            </div> 
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg exp">
              <h2 className="text-light-bluecolor font-bold text-[1.2rem]">
                Smart India Hackathon (SIH) Internal Round
              </h2>
              <p className=" text-silver text-gray-400 text-sm mb-2  ">September 2024</p>
              <p className="text-textcolor font-semibold text-[1.1rem]">
                Brainstormed and proposed ideas to address <span className="text-light-bluecolor">student counseling problems</span> raised by the Ministry of Education.
              </p>
            </div>
          </div>

          {/* Hack It Sapiens */}
          <div className="ml-12 mb-8 relative">
            <div className="absolute -left-12 w-6 h-6 rounded-full bg-light-bluecolor flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-black"></div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg exp">
              <h2 className="text-light-bluecolor font-bold text-[1.2rem]">
                Hack It Sapiens
              </h2>
              <p className="text-silver text-sm mb-2  ">March 2024</p>
              <p className="text-textcolor font-semibold text-[1.1rem]">
                Created an <span className="text-light-bluecolor">E-commerce Marketplace for NFTs</span>, enabling seamless digital asset transactions.
              </p>
            </div>
          </div>
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
