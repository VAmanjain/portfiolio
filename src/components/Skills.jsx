import React from "react";
import { motion } from "framer-motion";
import { AiOutlineHtml5 } from "react-icons/ai"; // Import the HTML5 icon
import { BiLogoCss3 } from "react-icons/bi"; // Import the CSS icon
import { DiJavascript1 } from "react-icons/di"; // Import the JavaScript icon
import { FaBootstrap, FaSass } from "react-icons/fa"; // Import the Bootstrap and Sass icons
import { AiFillGithub } from "react-icons/ai"; // Import the GitHub icon
import { SiReact, SiTailwindcss } from "react-icons/si"; // Import the React and Tailwind icons
import { DiNodejs } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import "../css/common.css";

const tech = [
  {
    id: 1,
    skill: "HTML5",
    image: AiOutlineHtml5,
    duration: 1,
  },
  {
    id: 2,
    skill: "CSS",
    image: BiLogoCss3,
    duration: 1,
  },
  {
    id: 3,
    skill: "JAVASCRIPT",
    image: DiJavascript1,
    duration: 1,
  },
  {
    id: 4,
    skill: "BOOTSTRAP",
    image: FaBootstrap,
    duration: 1,
  },
  {
    id: 5,
    skill: "SASS",
    image: FaSass,
    duration: 1,
  },
  {
    id: 6,
    skill: "REACTJS",
    image: SiReact,
    duration: 1,
  },
  {
    id: 7,
    skill: "TAILWIND",
    image: SiTailwindcss,
    duration: 1,
  },
  {
    id: 8,
    skill: "GITHUB",
    image: AiFillGithub,
    duration: 1,
  },
  {
    id: 9,
    skill: "NODEJS",
    image: DiNodejs,
    duration: 1,
  },
  {
    id: 10,
    skill: "C++",
    image: TbBrandCpp ,
    duration: 1,
  },
];

const Skills = () => {
  return (
    <div name="skills" className="w-full h-auto min-h-screen flex justify-center items-center">
      {/* container  */}
      <div className="container mx-auto p-4 flex flex-col w-full h-full  ">
        <div className="p-4 flex justify-evenly items-center border-white border-[2px] rounded-[40px] text-yellowcolor my-auto " >
          <p className="text-4xl font-bold inline">
            Skills
          </p>
          
        </div>

        <div className="w-full grid grid-cols-2 tablet:grid-cols-4 laptop:grid-cols-5  gap-4 text-center py-8">
          {tech.map((techs) => {
            const Icon = techs.image;
            return (
              <div key={tech.id}>
                <div className="flex justify-center  ">
                  <div
                    className="w-[12rem] h-[8rem] mx-auto my-2 rounded  font-semibold border border-bluecolor skills"
                  >
                    <Icon size={100} className="p-2  my-auto mx-auto text-white " />
                    <p className="text-textcolor " >{techs.skill}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
