import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lg:flex-row gap-10 px-4 lg:px-20 py-12"
      >
        {/* Design Skills Section */}
        <div className="flex-1">
          <div className="py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px] uppercase">_______</p>
            <h2 className="text-3xl lg:text-4xl font-bold">Skills</h2>
          </div>
          <div className='mt-14 flex flex-col gap-6'>
            {/* platforms */}
            <SkillItem title="Microsoft Office 365 (PowerPoint, Word, Outlook)" percentage="100%" />
            <SkillItem title="HTML" percentage="100%" />
            <SkillItem title="C++" percentage="100%" />
            <SkillItem title="Visual Studio Code" percentage="90%" />
            <SkillItem title="Visual Studio" percentage="90%" />
            <SkillItem title="Unity" percentage="90%" />
            <SkillItem title="Android Studio" percentage="90%" />
            <SkillItem title="Unity 3D" percentage="90%" />
            <SkillItem title="Git Studio" percentage="90%" />
            <SkillItem title="VIM" percentage="90%" />
          </div>
        </div>

        {/* Development Skills Section */}
        <div className="flex-1">
          <div className="py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px] uppercase">_______</p>
            <h2 className="text-3xl lg:text-4xl font-bold">Skills</h2>
          </div>
          <div className='mt-14 flex flex-col gap-6'>
            <SkillItem title="Kotlin" percentage="90%" />
            <SkillItem title="C" percentage="90%" />
            <SkillItem title="CSS" percentage="90%" />
            <SkillItem title="Python" percentage="90%" />
            <SkillItem title="Java" percentage="90%" />
            <SkillItem title="Javascript" percentage="90%" />
            <SkillItem title="XML" percentage="90%" />
            <SkillItem title="Adobe Photoshop" percentage="90%" />
            <SkillItem title="Microsoft Excel" percentage="85%" />
            <SkillItem title="Assembly" percentage="30%"/>
          </div>
        </div>
      </motion.div>
    );
};

const SkillItem = ({ title, percentage }) => (
    <div className="overflow-x-hidden">
        <p className="text-sm uppercase font-medium">{title}</p>
        <div className="w-full h-2 bg-gray-200 rounded-md mt-2">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: percentage, transition: { duration: 0.5, delay: 0.5 } }}
                className={`h-full bg-gradient-to-r from-violet-600 via-blue-500 to-teal-400 rounded-md relative before:content-['${percentage}'] before:absolute before:right-0 before:-top-8`}
            >
                <span className="absolute -top-7 right-0">{percentage}</span>
            </motion.div>
        </div>
    </div>
);

export default Skills;
