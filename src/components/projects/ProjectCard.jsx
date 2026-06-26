import React from 'react';
import { motion } from 'framer-motion';

// Base styles shared by all buttons
const BTN_BASE = "font-bold py-2 px-4 rounded-full text-xs sm:text-sm inline-block glow-on-hover transition-all duration-300 text-btnTextColor";

// Point these directly to your tailwind.config.js keys!
const BTN_GITHUB = `${BTN_BASE} bg-btnGithub hover:bg-btnGithubHover`;
const BTN_WEB_SUCCESS = `${BTN_BASE} bg-btnBg hover:bg-btnHover`;
const BTN_WEB_DISABLED = `${BTN_BASE} bg-gray-500 hover:bg-red-700`; // Keeping disabled as a fallback

function ProjectCard({ slide, position, cardIndex }) {
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 1, type: 'spring', stiffness: 50, delay: position * 0.3 } },
  };

  const isCenter = position === 0;

  return (
    <motion.div 
      variants={cardVariants} 
      className={`transition-opacity duration-500 transform ${isCenter ? 'opacity-100 scale-105' : 'opacity-50 scale-100 blur-sm'} flex-none w-11/12 sm:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl`}
    >
      <img src={slide.url} alt={slide.title} className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-t-lg" />
      
      <div className="bg-bodyColor2 shadow-lg rounded-b-lg p-4 sm:p-6 md:p-8">
        <div className="font-bold text-xl mb-2 text-lightText">{slide.title}</div>
        <p className="text-gray-700 text-base mb-2 text-lightText">{slide.description}</p>
        
        <div>
          {slide.languages?.map((language, index) => (
            <span 
              key={index} 
              // ⬇️ Changed bg-gray-200 to bg-btnLang here ⬇️
              className="inline-block bg-btnLang rounded-full px-2 py-1 text-xs font-semibold text-lightText mr-2 mb-2 hover:glow-on-hover hover:cursor-pointer sm:px-3 sm:py-1 sm:text-sm"
            >
              {language}
            </span>
          ))}
        </div>
        
        <div className="mt-4 flex justify-left gap-2 sm:gap-4">
          <a href={slide.githubUrl} target="_blank" rel="noopener noreferrer" className={BTN_GITHUB}>
            View on GitHub
          </a>
          {slide.webButton && (
            <a 
              href={slide.webButton.url || '#'} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={slide.webButton.type === 'disabled' ? BTN_WEB_DISABLED : BTN_WEB_SUCCESS}
            >
              {slide.webButton.label}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;