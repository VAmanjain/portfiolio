import React from "react";
import { motion } from "framer-motion";
import { AiOutlineHtml5 } from "react-icons/ai"; // Import the HTML5 icon
import { BiLogoCss3 } from "react-icons/bi"; // Import the CSS icon
import { DiJavascript1 } from "react-icons/di"; // Import the JavaScript icon
import { FaBootstrap, FaSass } from "react-icons/fa"; // Import the Bootstrap and Sass icons
import { AiFillGithub } from "react-icons/ai"; // Import the GitHub icon
import { SiReact, SiTailwindcss } from "react-icons/si"; // Import the React and Tailwind icons
import "../css/common.css";

const tech = [
  {
    id: 1,
    skill: "HTML5",
    image: AiOutlineHtml5,
    duration:1,
    loc:-200
  },
  {
    id: 2,
    skill: "CSS",
    image: BiLogoCss3,
    duration:2,
    loc:-400
  },
  {
    id: 3,
    skill: "JAVASCRIPT",
    image: DiJavascript1,
    duration:3,
    loc:-600
  },
  {
    id: 4,
    skill: "BOOTSTRAP",
    image: FaBootstrap,
    duration:4,
    loc:-800
  },
  {
    id: 5,
    skill: "SASS",
    image: FaSass,
    duration:1,
    loc:-200
  },
  {
    id: 6,
    skill: "REACTJS",
    image: SiReact,
    duration:2,
    loc:-400
  },
  {
    id: 7,
    skill: "TAILWIND",
    image: SiTailwindcss,
    duration:3,
    loc:-600
  },
  {
    id: 8,
    skill: "GITHUB",
    image: AiFillGithub,
    duration:4,
    loc:-800
  },
];

const Skills = () => {
  return (
    <div name="skills" className="w-full h-auto text-gray-300">
      {/* container  */}
      <div className="container mx-auto p-4 flex flex-col w-full h-full pt-[90px]">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#FF0066] rounded">
            Skills
          </p>
          <p className="mt-4">
            // These are the technologies I have worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 tablet:grid-cols-4 gap-4 text-center py-8">
          {tech.map((techs) => {
            const Icon = techs.image;
            return (
              <div key={tech.id}>
                <div className="flex justify-center  ">
                  <motion.div
                    className="w-[12rem] h-[10rem] my-4 rounded shadow-md shadow-[#000000] font-semibold border border-[#FF0066] border-2 hover:backdrop-blur-2xl  skills"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    initial={{
                      x: techs.loc,
                    }}
                    transition={{
                      type: "spring",
                      duration:techs.duration,
                    }}
                    whileInView={{
                      x:0,
                    }}
                  >
                    <Icon size={100} className="py-4 mx-auto" />
                    <p className="my-2 relative">{techs.skill}</p>
                  </motion.div>
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
