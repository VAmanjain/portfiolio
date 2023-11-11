import React, { useState } from "react";
import { FaBars, FaTimes ,FaGithub, FaLinkedin } from "react-icons/fa";
import { BsInstagram} from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className="fixed  w-screen h-[70px] flex justify-between items-center px-4  text-gray-300  z-10 backdrop-blur-xs">
      <div>
        <h1 className="text-3xl font-bold">
      <Link className="cursor-pointer " to="intro" >
      Aj.
        </Link>
      </h1>
      </div>

      {/* Menu  */}

      <ul className=" hidden tablet:flex text-[1.2rem] font-bold ">
        <li data-aos="fade-down" ><Link className="hover:border-b-2 border-pink-600 duration-100 active:text-pink-600 " to="*" >
          Home
        </Link></li>
        <li data-aos="fade-down" ><Link className="hover:border-b-2 border-pink-600 duration-100 active:text-pink-600 " to="/skills" >
          Skills
        </Link> </li>
        <li data-aos="fade-down" ><Link className="hover:border-b-2 border-pink-600 duration-100 active:text-pink-600 " to="/work" >
         Project
        </Link></li>
        <li data-aos="fade-down" ><Link className="hover:border-b-2 border-pink-600 duration-100 active:text-pink-600 " to="/contact" >
          Contact
        </Link></li>
      </ul>

      {/* Hamburger  */}
      <div onClick={handleClick} className="tablet:hidden z-10">
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/* Mebile menu  */}
      <ul className={!nav ? "hidden" : "  absolute top-0 left-0 w-full h-screen  bg-[#0b0033] flex flex-col justify-center items-center "}>
        <li className="py-4 text-4xl"><Link className="hover:border-b-2 border-pink-600 duration-100 active:text-pink-600 " onClick={handleClick} to="home"  data-aos="fade-right" >
          Home
        </Link></li>
        <li className="py-4 text-4xl"><Link className="hover:border-b-2 border-pink-600 duration-100 active:text-pink-600 " onClick={handleClick} to="skills"  data-aos="fade-right" >
          Skills
        </Link> </li>
        <li className="py-4 text-4xl"><Link className="hover:border-b-2 border-pink-600 duration-100 active:text-pink-600 " onClick={handleClick} to="work"  data-aos="fade-right" >
          Projects
        </Link> </li>
      
        <li className="py-4 text-4xl"><Link className="hover:border-b-2 border-pink-600 duration-100 active:text-pink-600 " onClick={handleClick} to="contact"  data-aos="fade-right" >
          Contact
        </Link></li>
      </ul>

  
    </div>
  );
};

export default Navbar;
