import React from 'react';
import { data } from "../data/data.js";


const Work = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    <div name='work' className='w-full h-auto my-auto text-gray-300 '>
      <div className='container mx-auto p-4 flex flex-col justify-center  pt-[5rem] tablet:pt-[90px]'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

{/* container for projects */}
<div className="  grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4  ">
          
          {/* Gird Item */}
          {project.map((item, index) => (
  // <div
  //   key={index}
  //   style={{ backgroundImage: `url(${item.image})` }}
  //   className="shadow-lg shadow-[#040c16] group container rounded-tablet 
  //             flex justify-center text-center items-center mx-auto content-div max-w-tablet rounded-md "
  //             data-aos="fade-down" data-aos-duration="1200"  data-aos-delay={item.delay}
  // >
  //   {/* Hover effect for images */}
  //   <div className="opacity-0 group-hover:opacity-100 ">
  //     <span className="text-2xl font bold text-white tracking-wider ">
  //       {item.name}
  //     </span>
  //     <div className="pt-8 text-center ">
  //       {/* eslint-disable-next-line */}
  //       <a href={item.github} target="_blank">
  //         <button
  //           className="text-center rounded-lg px-4 py-3 m-2
  //                      bg-white text-gray-700 font-bold text-lg"
  //         >
  //           Code
  //         </button>
  //       </a>
  //       {/* eslint-disable-next-line */}
  //       <a href={item.live} target="_blank">
  //         <button
  //           className="text-center rounded-lg px-4 py-3 m-2
  //                      bg-white text-gray-700 font-bold text-lg"
  //         >
  //           Live
  //         </button>
  //       </a>
  //     </div>
  //   </div>
  // </div>

  <div className='grid  border border-pink-600 border-1 p-2 rounded  '>  
    <div className='rounded'>
      <img src={item.image} className='rounded' />
    </div>
    <div className='text-center text-[#ffffff] pt-4 font-[1.5rem] font-semibold'>
      <h2>{item.name}</h2>
    </div>
    <hr />
    <div className='flex justify-evenly p-2'>
      <div  className='bg-[#ffffff] font-semibold text-[#ff0066] w-[3.5rem] h-[2rem] text-center rounded flex justify-center items-center'>
        <a href={item.github} target='_blank' >Code</a>
      </div>
      <div className='bg-[#ffffff] font-semibold text-[#ff0066] w-[3.5rem] h-[2rem] text-center rounded flex justify-center items-center '>
        <a href={item.live} target='_blank'>Live</a>
      </div>
    </div>
  </div>

))}
</div>
      </div>
    </div>
  );
};

export default Work;