import React from "react";
import Who from '../assests/introPic.png'
import { FiGithub} from "react-icons/fi";
import {  FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiBento } from "react-icons/si";
import AboutImg from '../assests/AboutImg2.svg'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div name="about" className="w-full h-auto tablet:h-screen  text-gray-300 pb-4">
      <div className="flex flex-col justify-center items-center w-full h-full pt-[3rem] tablet:pt-2 ">
        <div className=" w-full  grid grid-cols-1 tablet:grid-cols-2 gap-8 ">
          <div className="tablet:text-right pb-2 tablet:pb-8 pl-4 ">
            <p className="text-5xl tablet:text-6xl font-bold inline border-b-4 border-[#ff0066] rounded " >
              Who I am?
            </p>
          </div>
          <div></div>
        </div>
        <div className="container
         w-full  grid tablet:grid-cols-2  tablet:gap-8 px-4  ">
          <div className="  flex justify-center items-center pb-8 tablet:pb-0  m-auto  order-last tablet:order-first ">
            <p className=" text-[1rem] tablet:text-[1.2rem] text-justify  ">
I'm Aman , a passionate Front-End Developer with a knack for turning ideas into digital masterpieces. I've embarked on a thrilling web development journey, combining creativity and coding to craft user-friendly, visually appealing websites. When I'm not at my computer, I enjoy outdoor adventures, and the occasional video game. I'm here to collaborate and bring your web dreams to life, so let's create something awesome together! 👨‍💻✨</p>
          </div>
          <div className="  flex justify-center items-center tablet:text-right text-2xl tablet:text-4xl font-bold">
         <img src={AboutImg} alt="About Image" style={{width:"20rem"}} />
          </div>
        </div>
          
          
          {/* socails */}


          <div className="pt-12 pb-6 w-full grid ">
            <div className="flex justify-center items-center">
            <h1 className="text-[1.8rem] font-semibold mb-4 rounded border-b-[4px] border-[#ff0066]  ">Connect with me</h1>
            </div>
            <div className="flex justify-center items-center">
            <ul className="flex justify-start items-center ">
              <motion.li
                 whileHover={{
                  scale:1.1,
                  backgroundColor:"#ff0066",
                }}
                whileTap={{
                  scale:0.9,
                  backgroundColor:"#ff0066",
                }}
              className=" w-[40px] h-[40px]  mx-2 flex justify-center items-center  border border-[#ededed] rounded-[50%]">
                <a href="https://github.com/VAmanjain" target="_blank">
                  <FiGithub size={20} />
                </a>
              </motion.li>
              <motion.li 
                 whileHover={{
                  scale:1.1,
                  backgroundColor:"#ff0066",
                }}
                whileTap={{
                  scale:0.9,
                  backgroundColor:"#ff0066",
                }}
              className=" w-[40px] h-[40px] mx-2 flex justify-center items-center  border border-[#ededed] rounded-[50%] ">
                <a
                  href="https://www.linkedin.com/in/aman-jain-416321256"
                  target="_blank"
                >
                  <FaLinkedin size={20} />
                </a>
              </motion.li>
              <motion.li
                 whileHover={{
                  scale:1.1,
                  backgroundColor:"#ff0066",
                }}
                whileTap={{
                  scale:0.9,
                  backgroundColor:"#ff0066",
                }}
              className=" w-[40px] h-[40px] mx-2 flex justify-center items-center  border border-[#ededed] rounded-[50%]">
                <a
                  href="https://instagram.com/iamanjain17?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                >
                  <BsInstagram size={20} />
                </a>
              </motion.li>
              <motion.li
                 whileHover={{
                  scale:1.1,
                  backgroundColor:"#ff0066",
                }}
                whileTap={{
                  scale:0.9,
                  backgroundColor:"#ff0066",
                }}
               className=" w-[40px] h-[40px] mx-2 flex justify-center items-center  border border-[#ededed] rounded-[50%]">
                <a   href="https://bento.me/vamanjain"
              target="_blank">
                  <SiBento size={20} />
                </a>
              </motion.li>
            </ul>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
