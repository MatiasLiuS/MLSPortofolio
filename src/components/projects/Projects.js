import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSwipeable } from 'react-swipeable'; 

import Title from '../layouts/Title';
import ProjectCard from './ProjectCard';
import { slidesData } from './projectsData';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigateSlide = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'next') {
        return prevIndex < slidesData.length - 1 ? prevIndex + 1 : 0;
      }
      return prevIndex > 0 ? prevIndex - 1 : slidesData.length - 1;
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => navigateSlide('next'),
    onSwipedRight: () => navigateSlide('prev'),
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const animation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 1, type: 'spring', stiffness: 50 } },
  };

  return (
    <section id="projects" className="w-full py-20 border-b border-borderColor sm:py-24">
      <div className="flex justify-center items-center text-center px-4 mb-8">
        <Title title="VISIT MY PORTFOLIO AND SEND YOUR FEEDBACK" des="My Projects" />
      </div>

      <motion.div
        {...handlers}
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={animation}
        className="max-w-7xl w-full m-auto py-8 px-2 relative group flex justify-center items-center gap-4 sm:gap-8"
        style={{ height: "500px", width: "100%" }}
      >
        {[-1, 0, 1].map((position) => {
          const cardIndex = (currentIndex + position + slidesData.length) % slidesData.length;
          return (
            <ProjectCard 
              key={cardIndex} 
              slide={slidesData[cardIndex]} 
              position={position} 
              cardIndex={cardIndex} 
            />
          );
        })}

        <BsChevronCompactLeft className="absolute left-0 text-3xl sm:text-4xl rounded-full text-gray-800 hover:text-gray-900 cursor-pointer z-10 bg-gray-200 p-1" onClick={() => navigateSlide('prev')} />
        <BsChevronCompactRight className="absolute right-0 text-3xl sm:text-4xl rounded-full text-gray-800 hover:text-gray-900 cursor-pointer z-10 bg-gray-200 p-1" onClick={() => navigateSlide('next')} />
      </motion.div>

      <div className="flex justify-center items-center mt-20">
        {slidesData.map((_, index) => (
          <div key={index} className={`h-4 w-4 rounded-full mx-1 transition-colors duration-300 ${index === currentIndex ? 'bg-designColor1' : 'bg-gray-400'}`}></div>
        ))}
      </div>
    </section>
  );
}

export default Projects;