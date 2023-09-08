import React, { useState } from "react";
import { FaBars, FaTimes ,FaGithub, FaLinkedin } from "react-icons/fa";
import { BsInstagram} from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className="fixed  w-screen h-[70px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300  z-10">
      <div>
        <h1 className="text-3xl font-bold"data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="800"  data-aos-delay="200">Aman.</h1>
      </div>

      {/* Menu  */}

      <ul className=" hidden md:flex">
        <li data-aos="fade-down" data-aos-duration="1200"  data-aos-delay="200"><Link className="hover:border-b-2 border-pink-600 duration-100 active:text-pink-600 " to="home" smooth={true} duration={500}>
          Home
        </Link></li>
        <li data-aos="fade-down" data-aos-duration="1200"  data-aos-delay="200"><Link className="hover:border-b-2 border-pink-600 duration-100 active:text-pink-600 " to="about" smooth={true} duration={500}>
          About
        </Link></li>
        <li data-aos="fade-down" data-aos-duration="1200"  data-aos-delay="200"><Link className="hover:border-b-2 border-pink-600 duration-100 active:text-pink-600 " to="skills" smooth={true} duration={500}>
          Skills
        </Link> </li>
        <li data-aos="fade-down" data-aos-duration="1200"  data-aos-delay="200"><Link className="hover:border-b-2 border-pink-600 duration-100 active:text-pink-600 " to="work" smooth={true} duration={500}>
         Project
        </Link></li>
        <li data-aos="fade-down" data-aos-duration="1200"  data-aos-delay="200"><Link className="hover:border-b-2 border-pink-600 duration-100 active:text-pink-600 " to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
      </ul>

      {/* Hamburger  */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/* Mebile menu  */}
      <ul className={!nav ? "hidden" : "  absolute top-0 left-0 w-full h-screen  bg-[#0a192f] flex flex-col justify-center items-center "}>
        <li className="py-4 text-4xl"><Link className="hover:border-b-2 border-pink-600 duration-100 active:text-pink-600 " onClick={handleClick} to="home" smooth={true} duration={500} data-aos="fade-right" data-aos-duration="1200"  data-aos-delay="200">
          Home
        </Link></li>
        <li className="py-4 text-4xl"><Link className="hover:border-b-2 border-pink-600 duration-100 active:text-pink-600 " onClick={handleClick} to="about" smooth={true} duration={500} data-aos="fade-right" data-aos-duration="1200"  data-aos-delay="200">
          About
        </Link></li>
        <li className="py-4 text-4xl"><Link className="hover:border-b-2 border-pink-600 duration-100 active:text-pink-600 " onClick={handleClick} to="skills" smooth={true} duration={500} data-aos="fade-right" data-aos-duration="1200"  data-aos-delay="200">
          Skills
        </Link> </li>
        <li className="py-4 text-4xl"><Link className="hover:border-b-2 border-pink-600 duration-100 active:text-pink-600 " onClick={handleClick} to="work" smooth={true} duration={500} data-aos="fade-right" data-aos-duration="1200"  data-aos-delay="200">
          Projects
        </Link> </li>
      
        <li className="py-4 text-4xl"><Link className="hover:border-b-2 border-pink-600 duration-100 active:text-pink-600 " onClick={handleClick} to="contact" smooth={true} duration={500} data-aos="fade-right" data-aos-duration="1200"  data-aos-delay="200">
          Contact
        </Link></li>
      </ul>

      {/* Socail icons  */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0 ">
<ul>
    <li className="flex w-[160px] h-[60px] justify-between items-center "data-aos="fade-right" data-aos-duration="1200"  data-aos-delay="200">
        <a  className="flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 "
        href="https://www.linkedin.com/in/aman-jain-416321256" target="_blank">
            Linkedin<FaLinkedin  size={30} />
        </a>
    </li>
    <li className="flex w-[160px] h-[60px] justify-between items-center "data-aos="fade-right" data-aos-duration="1200"  data-aos-delay="250">
        <a  className="flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 "
        href="https://github.com/VAmanjain" target="_blank">
            Github<FaGithub  size={30} />
        </a>
    </li>
    <li className="flex w-[160px] h-[60px] justify-between items-center "data-aos="fade-right" data-aos-duration="1200"  data-aos-delay="300">
        <a  className="flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 "
        href="https://instagram.com/iamanjain17?igshid=MzRlODBiNWFlZA==" target="_blank">
           Instagram<BsInstagram size={30} />
        </a>
    </li>
    <li className="flex w-[160px] h-[60px] justify-between items-center "data-aos="fade-right" data-aos-duration="1200"  data-aos-delay="350">
        <Link  className="flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 "
        to="contact">
            Contact<BsFillPersonLinesFill  size={30} />
        </Link>
    </li>
</ul>
      </div>
    </div>
  );
};

export default Navbar;
