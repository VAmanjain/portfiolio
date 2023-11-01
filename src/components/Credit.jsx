import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Credit = () => {
  return (
    <div className="w-full h-[7rem] tablet:h-[4rem] bg-[#002d53] px-6 grid grid-cols-1 tablet:flex table:justify-center tablet:items-center">
      <div className="w-full my-2 flex  justify-center items-center text-white font-semibold  tablet:w-[50%] tablet:justify-start  ">
        <h2>Designed by </h2> 
        <h2 className="px-1 font-semibold" style={{ fontSize: "1.3rem" }}>
          <AiOutlineCopyrightCircle />
        </h2>
        <h2 className="text-pink-600">
          <a href="https://github.com/VAmanjain/portfiolio">Aman Jain</a>
        </h2>
      </div>
      <div className="flex justify-center items-center text-white my-2 tablet:w-[50%]">
        <ul className="flex justify-center items-center">
          <li>
            <a
              className="flex justify-between items-center "
              href="https://www.linkedin.com/in/aman-jain-416321256"
              target="_blank"
            >
              <FaLinkedin size={20} />
            </a>
          </li>
          <li>
            <a
              className="flex justify-between items-center "
              href="https://github.com/VAmanjain"
              target="_blank"
            >
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a
              className="flex justify-between items-center "
              href="https://instagram.com/iamanjain17?igshid=MzRlODBiNWFlZA=="
              target="_blank"
            >
              <BsInstagram size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Credit;