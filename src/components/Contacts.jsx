import React, { useEffect } from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiBento } from "react-icons/si";
import ContactImg from "../assests/ConatctImg.svg";

const Contacts = () => {

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',})
  }, [])


  return (
    <div name="contact" className="w-[100%] h-auto tablet:p-4 py-5  ">
      <div className="mt-[90px] px-4">
        <div className="mx-4">
          <div className="text-yellowcolor font-bold border-white border-[2px] p-2 flex justify-center items-center rounded-[40px] mb-4  ">
            <h1 className="text-2xl tablet:text-3xl laptop:text-4xl text-center">
              Contact
            </h1>
          </div>

          <div className=" container mx-auto grid laptop:grid-cols-2  m-8 ">
            <div className=" w-full text-justify h-auto ">
              <div className="p-4">
                <h1 className="text-[1.2rem] text-light-bluecolor font-semibold pb-5">
                  Let's Connect:
                </h1>
                <ul className="flex justify-start items-center ">
                  <li className=" s-icon w-[40px] h-[40px]  mx-2 flex justify-center items-center  border border-white  rounded-[50%]">
                    <a href="https://github.com/VAmanjain" target="_blank">
                      <FiGithub size={20} className="text-textcolor" />
                    </a>
                  </li>
                  <li className=" s-icon w-[40px] h-[40px] mx-2 flex justify-center items-center  border border-white rounded-[50%]">
                    <a
                      href="https://www.linkedin.com/in/aman-jain-416321256"
                      target="_blank"
                    >
                      <FaLinkedin size={20} className="text-textcolor" />
                    </a>
                  </li>
                  <li className="s-icon w-[40px] h-[40px] mx-2 flex justify-center items-center  border border-white rounded-[50%]">
                    <a
                      href="https://instagram.com/iamanjain17?igshid=MzRlODBiNWFlZA=="
                      target="_blank"
                    >
                      <BsInstagram size={20} className="text-textcolor" />
                    </a>
                  </li>
                  <li className=" s-icon w-[40px] h-[40px] mx-2 flex justify-center items-center  border border-white rounded-[50%]">
                    <a href="https://bento.me/vamanjain" target="_blank">
                      <SiBento size={20} className="text-textcolor" />
                    </a>
                  </li>
                </ul>
                <div className="mt-[2rem] ">
                  <img src={ContactImg} alt="" style={{ width: "20rem" }} className="mx-auto" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mx-auto h-auto  ">
              <form
                method="POST"
                action="https://getform.io/f/3a91ce58-1c8a-4b95-9309-7c281be8e257"
                className=" flex flex-col max-w-[480px] p-4 border-bluecolor border-[2px] bg-textcolor rounded-[16px]  "
              >
                <div className="pb-4">
                  <p className="text-gray-300 py-4">
                    // Submit the form below or shoot me email-
                    <span className="font-semibold text-light-bluecolor">
                      vaman.jain17@gmail.com
                    </span>
                  </p>
                </div>
                <input
                  style={{ color: "black" }}
                  className="bg-[#ccd6f6] border border-bgcolor p-2 rounded "
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                />
                <input
                  style={{ color: "black" }}
                  className="my-4 bg-[#ccd6f6] p-2 rounded border border-bgcolor "
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />
                <textarea
                  style={{ color: "black" }}
                  className="bg-[#ccd6f6] p-2 rounded border border-bgcolor  "
                  name="message"
                  placeholder="Message"
                  cols="20"
                  rows="5"
                  required
                ></textarea>
                <button className=" f-btn text-bgcolor border-2 border-bgcolor text-[1.2rem] py-1 px-4 mx-auto my-4 flex items-center rounded ">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
