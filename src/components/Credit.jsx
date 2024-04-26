import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiBento } from "react-icons/si";

const Credit = () => {
  return (
    <div className="w-full h-[7rem] tablet:h-[4rem] bg-[#0d0d25]  px-6 grid grid-cols-1 tablet:flex table:justify-center tablet:items-center border-t border-t-white ">
      <div className="w-full my-2 flex  justify-center items-center text-textcolor font-semibold  tablet:w-[50%] tablet:justify-start  ">
        <h2>Designed and Developed by </h2>
        <h2 className="px-1 font-semibold" style={{ fontSize: "1.3rem" }}>
          <AiOutlineCopyrightCircle />
        </h2>
        <h2 className="">
          <a href="https://github.com/VAmanjain/portfiolio">Aman Jain</a>
        </h2>
      </div>
      <div className="flex justify-center items-center text-textcolor hover my-2 tablet:w-[50%]">
        <ul className="flex justify-between items-center">
          <li className="mx-2">
            <a
              className="flex justify-between items-center "
              href="https://www.linkedin.com/in/aman-jain-416321256"
              target="_blank"
            >
              <FaLinkedin size={20} />
            </a>
          </li>
          <li className="mx-2">
            <a
              className="flex justify-between items-center "
              href="https://github.com/VAmanjain"
              target="_blank"
            >
              <FaGithub size={20} />
            </a>
          </li>
          <li className="mx-2">
            <a
              className="flex justify-between items-center "
              href="https://instagram.com/iamanjain17?igshid=MzRlODBiNWFlZA=="
              target="_blank"
            >
              <BsInstagram size={20} />
            </a>
          </li>
          <li className="mx-2">
            <a
              className="flex justify-between items-center "
              href="https://bento.me/vamanjain"
              target="_blank"
            >
              <SiBento size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Credit;
