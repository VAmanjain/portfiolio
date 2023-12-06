import React from "react";
import { data } from "../data/data.js";
import { BsArrowUpRight } from "react-icons/bs";
import { BiGitBranch } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { FaLink } from "react-icons/fa";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const Work = () => {
  //Handle dialog
  const [id, setId] = React.useState(null);

  const handleOpen = (value) => setId(value);

  // projects file
  const project = data;
  //setProject(data);

  return (
    <div
      name="work"
      className="w-full h-auto my-auto min-h-screen  tablet:p-4 py-5 "
    >
      <div className=" laptop:px-4 mx-4 flex flex-col justify-center  pt-[5rem] tablet:pt-[90px]">
        <div className="p-2 flex justify-evenly items-center border-white border-[2px] rounded-[40px] text-yellowcolor my-auto ">
          <p className="text-4xl font-bold inline text-gray-300 ">Projects</p>
        </div>

        {/* container for projects */}
        <div className=" mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-3 laptop:grid-cols-3 tablet:gap-4 laptop:gap-6 h-auto pb-16 mx-[0.5rem]  ">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div className="w-full py-[2px] ">
              <div className="p-box h-[38rem] tablet:h-[32rem] p-2  rounded-[16px] tablet:rounded-[12px]  ">
                <div className="h-[12rem] mt-1 flex justify-center items-center p-2 ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-[8px]"
                  />
                </div>
                <div className="mt-1 h-[3rem] p-2 ">
                  <h1 className="text-yellowcolor text-center font-semibold text-3xl ">
                    {item.name}
                  </h1>
                </div>
                <div className="mt-1 h-auto p-2 ">
                  <p className="text-textcolor text-justify text-[1rem]">
                    {item.desc}
                  </p>
                </div>
                <div className=" mt-1 h-[6rem] mx-auto text-textcolor font-semibold ">
                  <div className="flex justify-center items-center mx-auto text-textcolor font-semibold ">
                    <a
                      href={item.github}
                      className="bg-bluecolor rounded-[8px] p-2 px-4 flex mx-2 items-center border-[2px] border-white "
                    >
                      {" "}
                      <AiFillGithub size={20} className="mx-1" /> GitHub
                    </a>
                    <a
                      href={item.live}
                      className="bg-bluecolor rounded-[8px] p-2 px-4 flex mx-2 items-center border-[2px] border-white "
                    >
                      {" "}
                      <FaLink size={15} className=" mx-1 " /> Demo{" "}
                    </a>
                  </div>
                  <div className="mx-auto flex justify-center items-center mt-2 ">
                    {/* ------Dialog-------- */}

                    <Button
                      onClick={() => handleOpen(item.id)}
                      variant="gradient"
                      className=" bg-bluecolor border-[2px] border-white mb-2 "
                    >
                      View Details
                    </Button>
                    <Dialog
                      open={id === item.id}
                      value={id || item.id}
                      handler={handleOpen}
                      animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0.9, y: -100 },
                      }}
                      className="bg-bluecolor mx-4 max-w-[1200px] p-2 "
                    >
                      <DialogBody className="w-full h-full grid laptop:flex justify-center items-center ">
                        <div className=" laptop:w-[50%]">
                          <img
                            src={item.image}
                            alt={item.name}
                            className=" rounded "
                          />
                        </div>
                        <div className=" laptop:w-[50%] p-4 overflow-scroll laptop:overflow-auto ">
                          <div className="text-center ">
                            <h1 className="text-textcolor font-semibold text-2xl mb-1  ">
                              {item.name}
                            </h1>
                          </div>
                          <div>
                            <p className="text-textcolor text-justify mb-1">
                              {" "}
                              {item.desc}{" "}
                            </p>
                          </div>
                          <div className=" flex text-textcolor  ">
                            <span className="font-medium text-yellowcolor text-[1.1rem] mb-1 mx-1 ">
                              TIME FRAME:
                            </span>
                            {item.time}
                          </div>
                          <div className="flex items-center ">
                            <span className="font-medium text-yellowcolor text-[1.1rem] mx-1 ">
                              TECHSTACK:
                            </span>
                            <ul className="flex  px-2 pb-2">
                              {item.technologies &&
                                item.technologies.map((techs, index) => (
                                  <li
                                    key={index}
                                    className=" flex items-center w-[40px] rounded-[50%]  p-2 "
                                  >
                                    <img src={techs} alt="" className=" " />
                                  </li>
                                ))}
                            </ul>
                          </div>
                          <div className="mb-1 text-textcolor ">
                            <span className="font-medium text-yellowcolor mx-1 ">
                              CONTEXT:
                            </span>
                            {item.context}
                          </div>
                        </div>
                      </DialogBody>
                      <DialogFooter>
                        <Button
                          variant="gradient"
                          color="green"
                          onClick={handleOpen}
                          className="border-[2px] border-white "
                        >
                          <span>Close</span>
                        </Button>
                      </DialogFooter>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
