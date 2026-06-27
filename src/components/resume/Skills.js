import React from 'react';
import { motion } from 'framer-motion';

// Simple animation variants for staggered badge entry
const containerVariants = {
  animate: { transition: { staggerChildren: 0.05 } }
};

const badgeVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const Skills = () => {
    // Grouping data into clean, logical technical categories
    const coreDev = [
      "Python", "Java", "Flask", "AI Tool Integration (ChatGPT, Gemini, DeepSeek APIs)", 
      "Kotlin", "JavaScript", "C", "OpenCV", "HTML", "CSS", "XML"
    ];

    const ecosystemTools = [
      "Git", "Vim", "Visual Studio Code", "Visual Studio", "Android Studio", 
      "Unity / Unity 3D", "Meta API", "Aria Studio", "WordPress"
    ];

    const designProductivity = [
      "Adobe Photoshop", "Canva", "Microsoft Office 365 (PowerPoint, Word, Outlook)", "Microsoft Excel"
    ];

    return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full mt-4 rounded-xl flex flex-col gap-12 px-4 lg:px-20 py-12 text-white bg-bodyColor2" 
      >
        {/* Core Development Section */}
        <div>
          <div className="py-6 font-titleFont flex flex-col gap-2">
            <p className="text-sm text-designColor1 tracking-[4px] uppercase">{"// Engineering"}</p>
            <h2 className="text-2xl lg:text-3xl font-bold uppercase tracking-wider">Core Development</h2>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className='mt-6 flex flex-wrap gap-3'
          >
            {coreDev.map((skill, index) => (
              <SkillBadge key={index} title={skill} />
            ))}
          </motion.div>
        </div>

        {/* Two Column Layout for Tools & Secondary Skills */}
        <div className="w-full flex flex-col lg:flex-row gap-12">
          
          {/* Platforms & Tools Section */}
          <div className="flex-1">
            <div className="py-6 font-titleFont flex flex-col gap-2">
              <p className="text-sm text-designColor1 tracking-[4px] uppercase">{"// Ecosystem"}</p>
              <h2 className="text-2xl font-bold uppercase tracking-wider">Platforms & Tools</h2>
            </div>
            <motion.div 
              variants={containerVariants}
              initial="initial"
              animate="animate"
              className='mt-6 flex flex-wrap gap-3'
            >
              {ecosystemTools.map((skill, index) => (
                <SkillBadge key={index} title={skill} />
              ))}
            </motion.div>
          </div>

          {/* Design & Productivity Section */}
          <div className="flex-1">
            <div className="py-6 font-titleFont flex flex-col gap-2">
              <p className="text-sm text-designColor1 tracking-[4px] uppercase">{"// Creative & Admin"}</p>
              <h2 className="text-2xl font-bold uppercase tracking-wider">Design & Productivity</h2>
            </div>
            <motion.div 
              variants={containerVariants}
              initial="initial"
              animate="animate"
              className='mt-6 flex flex-wrap gap-3'
            >
              {designProductivity.map((skill, index) => (
                <SkillBadge key={index} title={skill} />
              ))}
            </motion.div>
          </div>

        </div>
      </motion.div>
    );
};

// Universal Badge Component with text-lightText and border-designColor1
const SkillBadge = ({ title }) => (
    <motion.div
        variants={badgeVariants}
        whileHover={{ scale: 1.05, y: -2 }}
        className="px-4 py-2 rounded-md border bg-zinc-900 border-designColor1 text-lightText shadow-[0_0_15px_rgba(var(--designColor1-rgb),0.05)] text-xs md:text-sm font-medium tracking-wide transition-colors cursor-default"
    >
        {title}
    </motion.div>
);

export default Skills;