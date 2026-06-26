import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaLinkedinIn, FaGithub, } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiMysql, SiPython, SiUnity, SiAndroidstudio, SiKotlin } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
    words: [
        "Software Engineer.",
        "AI Integration Engineer.",
        "Full Stack Developer.",
        "ML Feature Engineer.",
        "Cloud Solutions Developer.",
        "HCI & Wearables Developer.",
        "Interactive XR Developer."
    ],    
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 50,
        delaySpeed: 2000,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { duration: 1.5 }
        },
    };

    const iconVariants = {
        hidden: { scale: 0 },
        visible: { 
            scale: 1, 
            transition: { duration: 1.5 }
        },
    };

    const staggerDelay = 0.75; // Adjust the delay between each icon popping in

    return (
        <motion.div 
            className='w-full lg:w-1/2 flex flex-col gap-10 lg:gap-20 p-4'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className='flex flex-col gap-2 md:gap-6'>
                <h4 className="text-lg md:text-xl font-normal">WELCOME TO MY PORTFOLIO</h4>
                <h1 className='text-3xl lg:text-5xl font-bold lightText'>
                    Hi, I'm <span className="text-designColor1 capitalize">Matias Liu Schmid</span>
                </h1>
                <div style={{ minHeight: '64px' }} className="text-2xl lg:text-4xl font-bold text-lightText">
                    a <span>{text}</span>
                    <Cursor cursorColor="#FFFFFF" />
                </div>
                <p className='text-sm md:text-base lg:text-md font-bodyFont leading-6 tracking-wide'>
                I am a Computer Science graduate from the George Washington University, 
                driven by a lifelong synergy between engineering precision and creative innovation. 
                My expertise spans full-stack development, intelligent AI integration, and human-computer interaction (HCI), 
                allowing me to design scalable, impactful technology with a strong emphasis on user experience. 
                Proudly leveraging my bilingual and Hispanic heritage, I bring a unique, culturally aware perspective to collaborative engineering teams. 
                I am committed to technical excellence and mission-driven development, focusing on building high-impact systems that solve real-world problems through human-centered design.
                </p>
            </div>
            <div className='flex md:flex-col lg:flex-row justify-between gap-6 md:gap-8 lg:gap-12'>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>
                        Find me in
                    </h2>
                    <div className='flex gap-4 justify-start'>
                        <motion.div variants={{ ...iconVariants, visible: { ...iconVariants.visible, transition: { delay: staggerDelay * 1 }}}} initial="hidden" animate="visible">
                            <a href="https://www.linkedin.com/in/matias-liu-schmid-204425268/">
                                <span className="bannerIcon">
                                    <FaLinkedinIn />
                                </span>
                            </a>
                        </motion.div>
                        <motion.div variants={{ ...iconVariants, visible: { ...iconVariants.visible, transition: { delay: staggerDelay * 2 }}}} initial="hidden" animate="visible">
                            <a href="https://github.com/MatiasLiuS">
                                <span className="bannerIcon">
                                    <FaGithub />
                                </span>
                            </a>
                        </motion.div>
                    </div>
                </div>
                <div>
    <h2 className='text-base uppercase font-titleFont mb-4'>
        Best skills in:
    </h2>
    <div className='grid grid-cols-4 gap-4'>
        <motion.div variants={{ ...iconVariants, visible: { ...iconVariants.visible, transition: { delay: staggerDelay * 3 }}}} initial="hidden" animate="visible">
            <span className="bannerIcon">
                <SiPython />
            </span>
        </motion.div>
        <motion.div variants={{ ...iconVariants, visible: { ...iconVariants.visible, transition: { delay: staggerDelay * 4 }}}} initial="hidden" animate="visible">
            <span className="bannerIcon">
               <SiMysql />
            </span>
        </motion.div>
        <motion.div variants={{ ...iconVariants, visible: { ...iconVariants.visible, transition: { delay: staggerDelay * 5 }}}} initial="hidden" animate="visible">
            <span className="bannerIcon">
                <SiJavascript />
            </span>
        </motion.div>
        <motion.div variants={{ ...iconVariants, visible: { ...iconVariants.visible, transition: { delay: staggerDelay * 6 }}}} initial="hidden" animate="visible">
            <span className="bannerIcon">
                <SiUnity />
            </span>
        </motion.div>
        <motion.div variants={{ ...iconVariants, visible: { ...iconVariants.visible, transition: { delay: staggerDelay * 7 }}}} initial="hidden" animate="visible">
            <span className="bannerIcon">
                <SiAndroidstudio />
            </span>
        </motion.div>
        <motion.div variants={{ ...iconVariants, visible: { ...iconVariants.visible, transition: { delay: staggerDelay * 8 }}}} initial="hidden" animate="visible">
            <span className="bannerIcon">
                <SiKotlin/>
            </span>
        </motion.div>
        <motion.div variants={{ ...iconVariants, visible: { ...iconVariants.visible, transition: { delay: staggerDelay * 9 }}}} initial="hidden" animate="visible">
            <span className="bannerIcon">
                <SiCss3/>
             </span>
        </motion.div>
        <motion.div variants={{ ...iconVariants, visible: { ...iconVariants.visible, transition: { delay: staggerDelay * 10 }}}} initial="hidden" animate="visible">
            <span className="bannerIcon">
               <SiHtml5/>
            </span>
        </motion.div>
    </div>
</div>

            </div>
        </motion.div>
    );
}

export default LeftBanner;
