import React from 'react'
import {BiChevronDown} from 'react-icons/bi'
import {Link} from 'react-scroll'


const Intro = () => {
  return (
    <div className='h-screen flex justify-center items-center' name='intro' >
      <div className='container'>
        <div className='text-white z-0 flex justify-center items-center px-8 text-center '>
            <h1 className='font-bold text-white text-[2rem] md: text-[4rem]'>Welcome to My Protfolio </h1>
        </div>
        <div className='flex justify-center'   >
        <Link className=" cursor-pointer relative top-[13rem] hover: font-[2rem]'" to="home" smooth={true} duration={500}>
        <svg class="h-16 w-16 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="7 7 12 12 17 7" />  <polyline points="7 13 12 18 17 13" /></svg>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Intro
