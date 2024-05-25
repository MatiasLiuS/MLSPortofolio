import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon }) => {
  return (
    <div className="w-full px-4 md:px-12 h-auto py-8 md:py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-{#8C8C8C} group hover:bg-gradient-to-b hover:from-grey hover:to-[#C9CAC9] transition-colors duration-100 group">
        <div className='overflow-y-hidden'>
            <div className='flex flex-col gap-3 md:gap-5 translate-y-10 group-hover:translate-y-0 transition-transform duration-500'>
                <div>
                    {/* Adjust icon size for smaller screens */}
                    <span className='text-3xl md:text-5xl text-designColor'>{icon}</span> 
                </div>
                <div className='flex flex-col gap-4 md:gap-10'>
                    {/* Adjust title font size for smaller screens */}
                    <h2 className='text-xl md:text-2xl font-titleFont font-bold text-black'>
                        {title}
                    </h2>
                    {/* Adjust description text size for smaller screens */}
                    <p className='text-sm md:base'>{des}</p>  
                    <span className='text-2xl text-designColor'>
                        <HiArrowRight />
                    </span>  
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card;
