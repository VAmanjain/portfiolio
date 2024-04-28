import React, { useEffect } from "react";
import Image from "../assests/myAvatar.png";
import { Tilt } from "react-tilt";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import IntroImage from '../../src/assests/introPic.png'


const ResumeClick = () => {
  document.getElementById("resume-a").click();
};

const defaultOptions = {
  reverse: false, 
  max: 45, 
  perspective: 1000,
  scale: 1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)", 
};

const Home = () => {
  const [text] = useTypewriter({
    words: ["MERN Stack Developer", "Student", "Designer"],
    loop: {},
  });
 
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',})
  }, [])


  return (
    <div
      name="home"
      className="w-[100%] h-auto  tablet:h-screen flex justify-center items-center tablet:p-4 text-gray-700 py-10 "
    >
      {/* Container  */}

      <div className=" px-4 tablet:px-8 flex flex-cols-2 justify-center items-center w-full h-full ">
        <div className="w-full mt-[40px] laptop:mt-[90px] mx-auto h-auto justify-center items-center ">
          <div className=" text-yellowcolor font-bold  flex justify-center items-center text-2xl tablet:text-3xl laptop:text-4xl p-2 border-[2px] border-white rounded-[40px] ">
            <h1 className="text-center ">Welcome to My Portfolio</h1>
          </div>
          <div className="  tablet:grid  tablet:grid-cols-2  py-8 mt-6 ">
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

            <div className=" text-center tablet:text-left w-full ">
              <p className="text-[1.2rem] tablet:text-[2.5rem]   text-[#ccd6f6] z-20">
                Hi, This is
              </p>
              <h1 className=" name text-[2.2rem] tablet:mb-8 text-textcolor  mb-4 tablet:text-[4rem] font-bold tablet:flex items-center mx-auto ">
                AMAN JAIN
                <span className="w-full h-auto flex justify-center tablet:w-auto " >
                  <img src={IntroImage} alt="" className=" w-[8rem] mx-a " />
                </span>
              </h1>
              <h2 className="text-[1.3rem] grid laptop:flex tablet:text-[2rem] font-bold text-[#ededed] ">
                I'm
                <span className=" d-desc text-light-bluecolor px-0 laptop:px-2 ">
                  {text}
                  <Cursor cursorStyle="|" />
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
