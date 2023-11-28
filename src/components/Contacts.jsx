import React from "react";
import { FiGithub} from "react-icons/fi";
import {  FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiBento } from "react-icons/si";
import ContactImg from '../assests/ConatctImg.svg'
import {motion} from 'framer-motion'

const Contacts = () => {
  return (
    <div
      name="contact"
      className="w-full h-auto min-h-screen mb-[5rem]  flex justify-center items-center p-4 text-[#ededed] py-10  "
    >
      <div className="grid  tablet:grid-cols-2">
        <div className="pt-12 ">
          <p className=" text-4xl font-bold inline border-b-4 border-[#ff0066] rounded text-gray-300">
            Contact
          </p>
          <div className="pt-6">
            <h1 className="text-[1.2rem] font-semibold pb-5">Let's Connect:</h1>
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
              className=" w-[40px] h-[40px] mx-2 flex justify-center items-center  border border-[#ededed] rounded-[50%]">
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
            <div className="mt-[2rem]">
              <img src={ContactImg} alt="" style={{width:"20rem"}} />
            </div>
          </div>
        </div>
        <div>
          <div className="mx-auto pt-12 ">
            <form
              method="POST"
              action="https://getform.io/f/3a91ce58-1c8a-4b95-9309-7c281be8e257"
              className=" flex flex-col max-w-[480px] p-4 border border-[#ff0066] border-[2px] backdrop-blur-2xl rounded "
            >
              <div className="pb-4">
                <p className="text-gray-300 py-4">
                  // Submit the form below or shoot me email-
                  <span className="font-semibold text-[#ff0077]">vaman.jain@17gmail.com</span>
                </p>
              </div>
              <input
                className="bg-[#ccd6f6] p-2 rounded "
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                className="my-4 bg-[#ccd6f6] p-2 rounded "
                type="email"
                placeholder="Email"
                name="email"
              />
              <textarea
                className="bg-[#ccd6f6] p-2 rounded"
                name="message"
                placeholder="Message"
                cols="20"
                rows="5"
              ></textarea>
              <motion.button 
              whileHover={{
                scale:1.1,
                backgroundColor:"#ff0066",
              }}
              whileTap={{
                scale:0.9,
                backgroundColor:"#ff0066",
              }}
              className="text-white text-[1.2rem] border-2 py-1 px-4 mx-auto my-4 flex items-center rounded ">
                Submit
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
