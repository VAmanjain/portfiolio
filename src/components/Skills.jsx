import React from "react";
import HTML from "../assests/html.png";
import CSS from "../assests/css.png";
import JS from "../assests/javascript.png";
import ReactJS from "../assests/react.png";


const Skills = () => {
  return (
    <div name="skills" className=" w-full h-screen bg-[#0a192f] text-gray-300 ">
      {/* container  */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col jus  w-full h-full  ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Experience
          </p>
          <p className="py-4">
            // These are the technologies I have worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center  py-8 ">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 py-4 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 py-4 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md py-4 shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={JS} alt="JS icon" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img
              className="w-20 mx-auto py-4 "
              src={ReactJS}
              alt="ReactJS icon"
            />
            <p className="my-4">ReactJS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
