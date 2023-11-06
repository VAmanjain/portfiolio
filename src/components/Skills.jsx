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


const Skills = () => {
  return (
    <div name="skills" className=" w-full h-auto text-gray-300  ">
      {/* container  */}
      <div className="container mx-auto p-4 flex flex-col jus  w-full h-full pt-[90px] ">
        <div className="pb-4"
        >
          <p className="text-4xl font-bold inline border-b-4 border-[#FF0066]">
            Skills
          </p>
          <p className="mt-4"
          >
            // These are the technologies I have worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 tablet:grid-cols-4 gap-4 text-center  py-8  ">
          <motion.div
            className="  shadow-md shadow-[#000000] font-semibold border border-[#FF0066] border-spacing-6 skills"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <img className="w-20 py-4 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </motion.div>
          <div className="shadow-md shadow-[#000000] hover:scale-110 duration-500 border border-[#FF0066] border-spacing-6 group-first:skills ">
            <img className="w-20 py-4 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div
            className="shadow-md shadow-[#000000] pt-4 hover:scale-110 duration-500 border border-[#FF0066] border-spacing-6  skills "
            data-aos="fade-down"
            data-aos-duration="1200"
            data-aos-delay="550"
          >
            <img className="w-20 mx-auto" src={JS} alt="JS icon" />
            <p className="my-4">JavaScript</p>
          </div>
          <div
            className="shadow-md shadow-[#000000] hover:scale-110 duration-500 border border-[#FF0066] border-spacing-6  skills "
            data-aos="fade-down"
            data-aos-duration="1200"
            data-aos-delay="650"
          >
            <img
              className="w-20 mx-auto py-4 "
              src={ReactJS}
              alt="ReactJS icon"
            />
            <p className="my-4">ReactJS</p>
          </div>
          <div
            className="shadow-md shadow-[#000000] hover:scale-110 duration-500 border border-[#FF0066] border-spacing-6  skills "
            data-aos="fade-down"
            data-aos-duration="1200"
            data-aos-delay="650"
          >
            <img
              className="w-[120px] mx-auto py-1 "
              src={Bootstrap}
              alt="ReactJS icon"
            />
            <p className="my-4">BootStarp</p>
          </div>
          <div
            className="shadow-md shadow-[#000000] hover:scale-110 duration-500 border border-[#FF0066] border-spacing-6  skills "
            data-aos="fade-down"
            data-aos-duration="1200"
            data-aos-delay="650"
          >
            <img
              className="w-20 mx-auto py-4"
              src={Tailwind}
              alt="ReactJS icon"
              style={{ width: "200px" }}
            />
            <p className="my-4">Tailwind CSS</p>
          </div>
          <div
            className="shadow-md shadow-[#000000] hover:scale-110 duration-500 border border-[#FF0066] border-spacing-6  skills "
            data-aos="fade-down"
            data-aos-duration="1200"
            data-aos-delay="650"
          >
            <img className="w-20 mx-auto py-4 " src={Sass} alt="Sass icon" />
            <p className="my-4">SASS</p>
          </div>
          <div
            className="shadow-md shadow-[#000000] hover:scale-110 duration-500 border border-[#FF0066] border-spacing-6  skills "
            data-aos="fade-down"
            data-aos-duration="1200"
            data-aos-delay="650"
          >
            <img
              className="w-[200px] mx-auto py-1 "
              src={GitHub}
              alt="ReactJS icon"
            />
            <p className="my-4">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
