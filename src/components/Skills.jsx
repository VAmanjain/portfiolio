import React from "react";
import "../css/common.css";
import tech from '../data/skill'

const Skills = () => {
  return (
    <div name="skills" className="w-full h-auto min-h-screen flex justify-center items-center">
      {/*---------------- container  ----------------------*/}
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
