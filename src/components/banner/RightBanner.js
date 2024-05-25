import React from 'react';
import { Tilt } from 'react-tilt'; // Import Tilt from react-tilt
import { motion } from 'framer-motion'; // Import the motion component
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  // Define the initial and animate states for the pop-in animation
  const containerVariants = {
    hidden: { scale: 0.2, opacity: 0 }, // Start smaller and invisible
    visible: { 
      scale: 1, // Scale to normal size
      opacity: 1, // Fade in to fully visible
      transition: { 
        duration: 2.5, // Customize the transition duration
        type: 'spring', // Use spring animation for a popping effect
        stiffness: 100, // Adjust stiffness for the popping effect
      } 
    },
  };

  return (
    <motion.div 
      className='flex-1 flex justify-center items-center relative max-w-md lg:max-w-lg xl:max-w-xl mx-auto'
      variants={containerVariants} // Apply the variants
      initial="hidden" // Initial state before animation
      animate="visible" // State after animation
    >
      <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
        <div className="relative z-10">
          <img className="w-full max-w-[426px] h-auto" src={bannerImg} alt="Banner" />
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[425px] h-56 lg:h-72 xl:h-80 bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center z-0"></div>
      </Tilt>
    </motion.div>
  );
}

export default RightBanner;
