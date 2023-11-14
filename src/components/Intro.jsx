import React from 'react'
import {BiChevronDown} from 'react-icons/bi'
import {Link} from 'react-scroll'
import IntroPhoto from '../assests/introPic.png'


const Intro = () => {
  return (
    <div className='h-screen flex justify-center items-center' name='intro' >
      <div className=' grid tablet:grid-cols-2 '>
        <div className=' ' >
          <img src={IntroPhoto} style={{width:"550px"}}  />
        </div>
        <div className='text-white z-0 flex justify-center items-center px-8 text-center '>
            <h1 className='font-bold text-white text-[2rem] md: text-[4rem]'>Welcome to My Protfolio </h1>
        </div>
      </div>
       
    </div>
  )
}

export default Intro
