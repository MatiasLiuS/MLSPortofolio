import React from 'react';
import Title from '../layouts/Title';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { Tilt } from 'react-tilt';

const Contact = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const contactVariants = {
    hidden: { x: 300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5 }
    },
  };

  return (
    <motion.section
      id="contact"
      className="w-full py-10 lg:py-20 border-b-[1px] border-b-borderColor"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={contactVariants}
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Get in Contact With Me!" />
      </div>

      <div className="container mx-auto px-4">
        {/* Main Card Container */}
        <div className="w-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 lg:p-10 rounded-lg shadow-shadowOne flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Photo, Name, and Subtitle */}
          <div className="flex flex-col items-center text-center gap-4 min-w-[280px] w-full lg:w-auto">
            <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
              <img
                className="w-full max-w-xs h-64 object-cover rounded-lg shadow-md mx-auto"
                src={contactImg}
                alt="contactImg"
              />
            </Tilt>
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Matias Liu Schmid</h3>
              <p className="text-md md:text-lg font-normal text-gray-400 mt-1">
                Aspiring Developer
              </p>
            </div>
          </div>

          {/* Right Side: Bio, Contact Details, and Social Links */}
          <div className="flex-1 flex flex-col justify-between h-full text-center gap-6 w-full">
            <div>
              <p className="text-sm md:text-base text-white tracking-wide leading-relaxed">
                Thank you for taking the time to read my portfolio! I would love to hear from you soon!
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2 items-center">
              <p className="text-sm md:text-base text-white flex justify-center items-center gap-2">
                Email: <span className="text-gray-300 font-medium select-all">mliuschmid@gmail.com</span>
              </p>
              <p className="text-sm md:text-base text-white flex justify-center items-center gap-2">
                University Email: <span className="text-gray-300 font-medium select-all">liu_matias@gwmail.gwu.com</span>
              </p>
            </div>

            <div className="pt-4">
              <h2 className="text-sm md:text-base uppercase font-titleFont mb-4 text-white tracking-wider">Find me in</h2>
              <div className="flex justify-center gap-4">
                <a href="https://www.linkedin.com/in/matias-liu-schmid-204425268/" target="_blank" rel="noopener noreferrer">
                  <span className="bannerIcon iconShadow">
                    <FaLinkedinIn />
                  </span>
                </a>
                <a href="https://github.com/MatiasLiuS" target="_blank" rel="noopener noreferrer">
                  <span className="bannerIcon iconShadow">
                    <FaGithub />
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;