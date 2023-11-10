import React from "react";
import { FiGithub} from "react-icons/fi";
import {  FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiBento } from "react-icons/si";

const Contacts = () => {
  return (
    <div
      name="contact"
      className="w-full h-auto   flex justify-center items-center p-4 text-[#ededed] py-10  "
    >
      <div className="grid  tablet:grid-cols-2">
        <div className="pt-12 ">
          <p className=" text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <div className="pt-6">
            <h1 className="text-[1.2rem] font-semibold pb-5">Let's Connect:</h1>
            <ul className="flex justify-start items-center ">
              <li className=" w-[40px] h-[40px] mx-2 mx-2 flex justify-center items-center  border border-[#ededed] rounded-[50%]  hover:bg-[#715df2] hover:border-[#715df2] hover:scale-110 hover:shadow-tablet shadow-[#715df2]-1/2">
                <a href="https://github.com/VAmanjain" target="_blank">
                  <FiGithub size={20} />
                </a>
              </li>
              <li className=" w-[40px] h-[40px] mx-2 flex justify-center items-center  border border-[#ededed] rounded-[50%]  hover:bg-[#715df2] hover:border-[#715df2] hover:scale-110 hover:shadow-tablet shadow-[#715df2]-1/2">
                <a
                  href="https://www.linkedin.com/in/aman-jain-416321256"
                  target="_blank"
                >
                  <FaLinkedin size={20} />
                </a>
              </li>
              <li className=" w-[40px] h-[40px] mx-2 flex justify-center items-center  border border-[#ededed] rounded-[50%]  hover:bg-[#715df2] hover:border-[#715df2] hover:scale-110 hover:shadow-tablet shadow-[#715df2]-1/2">
                <a
                  href="https://instagram.com/iamanjain17?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                >
                  <BsInstagram size={20} />
                </a>
              </li>
              <li className=" w-[40px] h-[40px] mx-2 flex justify-center items-center  border border-[#ededed] rounded-[50%]  hover:bg-[#715df2] hover:border-[#715df2] hover:scale-110 hover:shadow-tablet shadow-[#715df2]-1/2">
                <a   href="https://bento.me/vamanjain"
              target="_blank">
                  <SiBento size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="mx-auto pt-12">
            <form
              method="POST"
              action="https://getform.io/f/3a91ce58-1c8a-4b95-9309-7c281be8e257"
              className=" flex flex-col max-w-[480px] p-4 bg-[#715df2] rounded "
            >
              <div className="pb-4">
                <p className="text-gray-300 py-4">
                  // Submit the form below or shoot me email-
                  <span className="font-semibold">vaman.jain@17gmail.com</span>
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
              <button className="text-white text-[1.2rem] border-2 hover:bg-pink-600 hover:border-pink-300 py-1 px-4 mx-auto my-4 flex items-center rounded ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
