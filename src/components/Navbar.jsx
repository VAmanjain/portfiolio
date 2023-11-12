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
    <div className="fixed  w-screen h-[70px] flex justify-between items-center px-4  text-gray-300  z-10 backdrop-blur-xs">
      <div>
        <h1 className="text-3xl font-bold">
          <Link className="cursor-pointer " to="intro">
            Aj.
          </Link>
        </h1>
      </div>

      {/* Menu  */}

      <ul className=" hidden tablet:flex text-[1.2rem] font-bold ">
        <li data-aos="fade-down">
          <Link
            className=" flex justify-start items-center  hover:border-b-2 border-[#ff0066] duration-100 active:text-[#ff0066] "
            to="*"
          >
            <BiHomeAlt className="mx-2" />
            Home
          </Link>
        </li>
        <li data-aos="fade-down">
          <Link
            className=" flex justify-start items-center hover:border-b-2 border-[#ff0066] duration-100 active:text-[#ff0066] "
            to="/skills"
          >
            <HiOutlineDesktopComputer className="mx-2" />
            Skills
          </Link>{" "}
        </li>
        <li data-aos="fade-down">
          <Link
            className="flex justify-start items-center hover:border-b-2 border-[#ff0066] duration-100 active:text-[#ff0066] "
            to="/work"
          >
            <AiOutlineFundProjectionScreen className="mx-2" /> Project
          </Link>
        </li>
        <li data-aos="fade-down">
          <Link
            className="flex justify-start items-center hover:border-b-2 border-[#ff0066] duration-100 active:text-[#ff0066] "
            to="/contact"
          >
            <RiContactsLine className="mx-2" /> Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger  */}
      <div onClick={handleClick} className="tablet:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mebile menu  */}
      <ul
        className={
          !nav
            ? "hidden"
            : "  absolute top-0 left-0 w-full h-screen  bg-[#0b0033] flex flex-col justify-center items-center "
        }
      >
        <li className="py-4 text-4xl">
          <Link
            className="flex justify-start items-center hover:border-b-2 border-[#ff0066] duration-100 active:text-[#ff0066] "
            onClick={handleClick}
            to="home"
            data-aos="fade-right"
          >
            <BiHomeAlt className="mx-2" /> Home
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <Link
            className="flex justify-start items-center hover:border-b-2 border-[#ff0066] duration-100 active:text-[#ff0066] "
            onClick={handleClick}
            to="skills"
            data-aos="fade-right"
          >
            <HiOutlineDesktopComputer className="mx-2" /> Skills
          </Link>{" "}
        </li>
        <li className="py-4 text-4xl">
          <Link
            className="flex justify-start items-center hover:border-b-2 border-[#ff0066] duration-100 active:text-[#ff0066] "
            onClick={handleClick}
            to="work"
            data-aos="fade-right"
          >
            <AiOutlineFundProjectionScreen className="mx-2" /> Projects
          </Link>{" "}
        </li>

        <li className="py-4 text-4xl">
          <Link
            className="flex justify-start items-center hover:border-b-2 border-[#ff0066] duration-100 active:text-[#ff0066] "
            onClick={handleClick}
            to="contact"
            data-aos="fade-right"
          >
            <RiContactsLine className="mx-2" /> Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
