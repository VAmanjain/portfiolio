import React from "react";
import { motion } from "framer-motion";
import HTML from "../assests/html.png";
import CSS from "../assests/css.png";
import JS from "../assests/javascript.png";
import ReactJS from "../assests/react.png";
import Tailwind from "../assests/tailwindr.png";
import Bootstrap from "../assests/Bootstrapr.png";
import Sass from "../assests/sassr.png";
import GitHub from "../assests/githubr.png";
import "../css/common.css";

const tech = [
  {
    id: 1,
    skill: "HTML5",
    image: HTML,
  },
  {
    id: 2,
    skill: "CSS",
    image: CSS,
  },
  {
    id: 3,
    skill: "JAVASCRIPT",
    image: JS,
  },
  {
    id: 4,
    skill: "BOOTSTRAP",
    image: Bootstrap,
  },
  {
    id: 5,
    skill: "SASS",
    image: Sass,
  },
  {
    id: 6,
    skill: "REACTJS",
    image: ReactJS,
  },
  {
    id: 7,
    skill: "TAILWIND",
    image: Tailwind,
  },
  {
    id: 8,
    skill: "GITHUB",
    image: GitHub,
  },
];

const Skills = () => {
  return (
    <div name="skills" className=" w-full h-auto text-gray-300  ">
      {/* container  */}
      <div className="container mx-auto p-4 flex flex-col jus  w-full h-full pt-[90px] ">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#FF0066]">
            Skills
          </p>
          <p className="mt-4">
            // These are the technologies I have worked with
          </p>
        </div>
            
        <div className="w-full grid grid-cols-2 tablet:grid-cols-4 gap-4 text-center  py-8 ">
          
        {tech.map((techs) => {
          return (
            <div key={tech.id} >
              <>
              <div className="flex justify-center">
              <motion.div
            className="  w-[12rem] h-[12rem] shadow-md shadow-[#000000] font-semibold border border-[#FF0066] border-spacing-6 skills"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <img className="w-[6rem] py-4 mx-auto" src={techs.image} alt="HTML icon" />
            <p className="my-4 relative ">{techs.skill}</p>
          </motion.div>
              </div>
              </>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
