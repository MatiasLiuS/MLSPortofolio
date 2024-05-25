import React from 'react';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { Tilt } from 'react-tilt';

const ContactLeft = () => {
  return (
    <div className="w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lg:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center items-center lg:items-start">
      <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
        <img
          className="w-full max-w-xs lg:max-w-none h-64 object-cover rounded-lg mb-2"
          src={contactImg}
          alt="contactImg"
        />
      </Tilt>
      <div className="text-center lg:text-left">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Matias Liu Schmid</h3>
        <p className="text-md md:text-lg font-normal text-white">
          Aspiring Developer
        </p>
        <p className="text-sm md:text-base text-white tracking-wide pt-4 md:pt-8">
          Thank you for taking the time to read my portfolio! I would love to hear from you soon!
        </p>
        <p className="text-sm md:text-base text-white flex justify-center lg:justify-start items-center gap-2 pt-5">
          Email: <span className="text-white">mliuschmid@gmail.com</span>
        </p>
        <p className="text-sm md:text-base text-white flex justify-center lg:justify-start items-center gap-2 pt-5">
          University Email: <span className="text-white">liu_matias@gwmail.gwu.com</span>
        </p>
      </div>
      <div className="text-center lg:text-left">
        <h2 className="text-sm md:text-base uppercase font-titleFont mb-4 text-white">Find me in</h2>
        <div className="flex justify-center lg:justify-start gap-4">
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
  );
}

export default ContactLeft;
