import React from "react";
import { data } from "../data/data.js";
import { BsArrowUpRight } from "react-icons/bs";
import { BiGitBranch } from "react-icons/bi";
import {motion} from 'framer-motion'

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div name="work" className="w-full h-auto my-auto text-gray-300 ">
      <div className="container mx-auto p-4 flex flex-col justify-center  pt-[5rem] tablet:pt-[90px]">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#FF0066]">
            Projects
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="  grid grid-cols-1 gap-6 h-auto pb-16 mx-[0.5rem]  ">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div className="w-full py-[2px] ">
              {item.id % 2 !== 0 ? ( 
                <motion.div className="border border-[#FF0066] rounded-[8px] tablet:rounded-[12px]  hover:backdrop-blur-2xl hover:scale-[1.01] duration-300  "
                initial={{
                  x:75,
                  opacity:0.5
                }}
                whileInView={{
                  x:0,
                  opacity:1
                }}
                viewport={{ once: true }}
            transition={{ duration: 0.75 }}>
                  <motion.div className="grid grid-cols-1 tablet:grid-cols-2 py-[16px] px-[1rem] 
                    "
                   
                    >
                    <div className=" w-full h-full tablet:h-auto tablet:px-5 py-3 ">
                      <div className="overflow-hidden  tablet:h-auto rounded tablet:rounded-[8px]">
                        <img src={item.image} alt="" className="  " />
                      </div>
                    </div>
                    <div className="py-1 ">
                      <h1 className="text-center text-[1.7rem] font-bold ">
                        {item.name}
                      </h1>
                      <p className="text-justify pt-3 tablet:pt-1 text-[0.9rem] tablet:text-[1rem] ">
                        {item.desc}
                      </p>
                      <div className="pt-1">
                        <span className="font-bold py-2">Tackstack:</span>
                        <ul className="flex px-2 pb-2">
                          {item.technologies &&
                            item.technologies.map((techs, index) => (
                              <li
                                key={index}
                                className="w-[40px] rounded-[50%]  p-2 "
                              >
                                <img src={techs} alt="" className=" " />
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="flex pt-1 w-full justify-center  items-center  ">
                        <div className="border bg-[#FF0066] border-[#FF0066] mx-4 px-5 py-1 rounded h-[2rem] ">
                          <a
                            href={item.github}
                            className="flex items-center justify-center "
                          >
                            Github
                            <BiGitBranch />
                          </a>
                        </div>
                        <div className="border bg-[#FF0066] border-[#FF0066] mx-4 px-5 py-1 rounded">
                          <a
                            href={item.live}
                            className="flex items-center justify-center "
                          >
                            Live <BsArrowUpRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                < motion.div
                className="border border-[#FF0066] rounded-[8px] tablet:rounded-[12px]  hover:backdrop-blur-2xl hover:scale-[1.01] duration-300  "
                initial={{
                  x:-100,
                  opacity:0.5
                }}
                whileInView={{
                  x:0,
                  opacity:1
                }}
                transition={{
                  duration:0.5,
                  type:"just",
                  Stiffness: 600
                }}
                >
                  <div className="grid grid-cols-1 grid tablet:grid-cols-2 py-[16px] px-[1rem]   ">
                    <div className=" w-full h-full tablet:h-auto tablet:px-5 py-3 tablet:order-last ">
                      <div className="overflow-hidden  tablet:h-auto  rounded-[8px]">
                        <img src={item.image} alt="" className="  " />
                      </div>
                    </div>
                    <div className="py-1 ">
                      <h1 className="text-center text-[1.7rem] font-bold ">
                        {item.name}
                      </h1>
                      <p className="text-justify pt-3 tablet:pt-1 text-[0.9rem] tablet:text-[1rem] ">
                        {item.desc}
                      </p>
                      <div className="pt-1">
                        <span className="font-bold py-2">Tackstack:</span>
                        <ul className="flex px-2 pb-2">
                          {item.technologies &&
                            item.technologies.map((techs, index) => (
                              <li
                                key={index}
                                className="w-[40px] rounded-[50%] p-2 "
                              >
                                <img src={techs} alt="" className=" " />
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="flex pt-1 w-full justify-center items-center  ">
                        <div className="border bg-[#FF0066] border-[#FF0066] mx-4 px-5 py-1 rounded h-[2rem] ">
                          <a
                            href={item.github}
                            className="flex items-center justify-center "
                          >
                            Github
                            <BiGitBranch />
                          </a>
                        </div>
                        <div className="border bg-[#FF0066] border-[#FF0066] mx-4 px-5 py-1 rounded">
                          <a
                            href={item.live}
                            className="flex items-center justify-center "
                          >
                            Live <BsArrowUpRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
