import React, { useEffect } from "react";

const About = () => {

  
  return (
    <div
      name="about"
      className=" container w-full h-auto tablet:h-auto  text-gray-300 pb-4"
    >
      <div className=" container  laptop:py-6 flex flex-col  items-center w-full h-full pt-[3rem] my-6 px-2 tablet:pt-2 ">
        <div className="w-full  flex justify-between items-center  py-4 pb-8 tablet:pb-0  m-auto">
          <h1 className="w-full text-textcolor text-justify font-semibold text-[1.2rem] py-2">
            Hey Everyone, I am{" "}
            <span className="text-light-bluecolor">Aman Jain</span> from{" "}
            <span className="text-light-bluecolor">Jaipur, India.</span>{" "}
          </h1>
        </div>
        <div className="w-full text-justify">
          <h1 className=" text-textcolor font-semibold text-[1.2rem] py-2 ">
            I currently pursuing B.tech from{" "}
            <span className="text-light-bluecolor">PIET</span>, Jaipur.
          </h1>
        </div>

        <div className="w-full text-justify">
          <h1 className="text-textcolor font-semibold text-[1.2rem] py-2 ">
            I am a second year Cs student. I'm passionate about exploring
            various web development technologies such as{" "}
            <span className="text-light-bluecolor">
              {" "}
              Develpoment, Database, Auth
            </span>{" "}
            and more.
          </h1>
        </div>
        <div className="w-full text-justify">
          <h1 className="text-textcolor font-semibold text-[1.2rem] py-2 ">
            I love combining creativity and coding to craft user-friendly,
            visually appealing websites.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
