import React from "react";
import Who from '../assests/introPic.png'

const About = () => {
  return (
    <div name="about" className="w-full h-auto tablet:h-screen  text-gray-300 pb-4">
      <div className="flex flex-col justify-center items-center w-full h-full pt-[18rem] tablet:pt-2 ">
        <div className=" w-full  grid grid-cols-1 tablet:grid-cols-2 gap-8 ">
          <div className="tablet:text-right pb-8 pl-4 "data-aos="fade-down" data-aos-duration="1200"  data-aos-delay="200">
            <p className="text-5xl tablet:text-6xl font-bold inline border-b-4 border-pink-600  " >
              Who am I?
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1060px]
         w-full  grid tablet:grid-cols-2  gap-8 px-4  ">
          <div className="flex justify-center items-center  m-auto">
            <p className="text-[1.2rem] text-justify ">
I'm Aman , a passionate Front-End Developer with a knack for turning ideas into digital masterpieces. I've embarked on a thrilling web development journey, combining creativity and coding to craft user-friendly, visually appealing websites. When I'm not at my computer, I enjoy outdoor adventures, and the occasional video game. I'm here to collaborate and bring your web dreams to life, so let's create something awesome together! 👨‍💻✨</p>
          </div>
          <div className=" flex justify-center items-center tablet:text-right text-2xl tablet:text-3xl tablet:text-4xl font-bold">
           <img src={Who} width={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
