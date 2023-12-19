import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="nav  fixed w-screen h-[70px] laptop:h-[90px] flex justify-between items-center px-[4rem]  text-gray-300  z-10  border-b border-white tablet:border-none ">
      
      <div className="border-white border-[2px] mx-3 p-2 rounded-full laptop:mx-10 ">
        <h1 className="text-2xl laptop:text-3xl text-textcolor font-bold px-[1.2px]">
          <Link className="cursor-pointer " to="intro">
            Aj.
          </Link>
        </h1>
      </div>

      {/* Menu  */}

      <ul className=" hidden w-full tablet:flex justify-center text-[1.2rem] font-bold text-textcolor  border-white border-[2px] p-2 rounded-[40px] ">
        <li data-aos="fade-down">
          <Link
            className=" flex justify-start items-center  hover:text-yellowcolor duration-100  "
            to="*"
          >
            <BiHomeAlt className="mx-2" />
            Home
          </Link>
        </li>
        <li data-aos="fade-down">
          <Link
            className=" flex justify-start items-center hover:text-yellowcolor duration-100  "
            to="/skills"
          >
            <HiOutlineDesktopComputer className="mx-2" />
           About
          </Link>{" "}
        </li>
        <li data-aos="fade-down">
          <Link
            className="flex justify-start items-center hover:text-yellowcolor duration-100  "
            to="/work"
          >
            <AiOutlineFundProjectionScreen className="mx-2" /> Project
          </Link>
        </li>
        <li data-aos="fade-down">
          <Link
            className="flex justify-start items-center hover:text-yellowcolor duration-100  "
            to="/contact"
          >
            <RiContactsLine className="mx-2" /> Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger  */}
      <div onClick={handleClick} className="tablet:hidden z-10 text-textcolor text-[1.2rem]  border-white border-[2px] rounded-full p-3 ">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mebile menu  */}
      <ul
        className={
          !nav
            ? "hidden"
            : " nav  absolute top-[100%] left-0 w-[100%] h-auto  bg-bgcolor text-textcolor flex flex-col justify-center items-center   "
        }
      >
        <div className="p-4 border border-white  rounded-2xl">
        <li className="py-4 text-4xl">
          <Link
            className="flex justify-start items-center hover:text-yellowcolor duration-100  "
            onClick={handleClick}
            to="home"
            data-aos="fade-right"
          >
            <BiHomeAlt className="mx-2" /> Home
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <Link
            className="flex justify-start items-center hover:text-yellowcolor duration-100  "
            onClick={handleClick}
            to="skills"
            data-aos="fade-right"
            >
            <HiOutlineDesktopComputer className="mx-2" />About
          </Link>{" "}
        </li>
        <li className="py-4 text-4xl">
          <Link
            className="flex justify-start items-center hover:text-yellowcolor duration-100  "
            onClick={handleClick}
            to="work"
            data-aos="fade-right"
            >
            <AiOutlineFundProjectionScreen className="mx-2" /> Projects
          </Link>{" "}
        </li>

        <li className="py-4 text-4xl">
          <Link
            className="flex justify-start items-center hover:text-yellowcolor duration-100  "
            onClick={handleClick}
            to="contact"
            data-aos="fade-right"
            >
            <RiContactsLine className="mx-2" /> Contact
          </Link>
        </li>
            </div>
      </ul>
    </div>
  );
};

export default Navbar;
