import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-auto md:h-screen  text-gray-300 pb-4">
      <div className="flex flex-col justify-center items-center w-full h-full pt-[18rem] md:pt-2 ">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4 "data-aos="fade-down" data-aos-duration="1200"  data-aos-delay="200">
            <p className="text-6xl font-bold inline border-b-4 border-pink-600  " >
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1060px]
         w-full grid sm:grid-cols-2  gap-8 px-4  ">
          <div className="sm:text-right text-2xl sm:text-3xl md:text-4xl font-bold "data-aos="fade-right" data-aos-duration="1200"  data-aos-delay="350">
            <p>
              Hi, I'm Aman Jain, nice to meet you . Please take a look around.
            </p>
          </div>
          <div  data-aos="fade-left" data-aos-duration="1200"  data-aos-delay="350">
            <p className="text-[1rem] ">
I'm Aman , a passionate Front-End Developer with a knack for turning ideas into digital masterpieces. I've embarked on a thrilling web development journey, combining creativity and coding to craft user-friendly, visually appealing websites. When I'm not at my computer, I enjoy outdoor adventures, and the occasional video game. I'm here to collaborate and bring your web dreams to life, so let's create something awesome together! 👨‍💻✨</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
