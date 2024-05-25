import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { logo, resume } from "../../assets/index";
import { MdMenu, MdClose } from 'react-icons/md'; // Ensure react-icons is installed
import { navLinksdata } from '../../constants';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const buttonVariants = {
        hidden: { y: '-100%', opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 1, type: 'spring', stiffness: 50 }
        },
    };

    return (
        <div className="w-screen h-24 fixed top-0 left-0 z-50 bg-bodyColor flex justify-between items-center px-4 lg:px-8 border-b-[1px] font-titleFont border-b-black">
            <div className="flex justify-between items-center w-full">
                <div className="shrink-0">
                    <img src={logo} alt="Logo" className="h-12 w-auto" />
                </div>
                <div className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
                    {navLinksdata.map(({_id, title, link}) => (
                        <Link
                            key={_id}
                            activeClass="active"
                            to={link}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="text-sm lg:text-base font-normal text-black tracking-wide hover:text-designColor duration-300 cursor-pointer"
                        >
                            {title}
                        </Link>
                    ))}
                    <motion.a 
                        href={resume} 
                        download="MLS_Resume.pdf" 
                        className="text-white font-bold py-2 px-4 rounded-full text-sm bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-700 hover:to-teal-600 duration-300 no-underline inline-block glow-on-hover"
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        Download My CV
                    </motion.a>
                </div>
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="flex md:hidden flex-col items-center absolute top-full left-0 w-full bg-bodyColor shadow-md">
                    <ul className="flex flex-col items-center gap-4 p-4">
                        {navLinksdata.map(({_id, title, link}) => (
                            <li key={_id} className="text-base font-normal text-black tracking-wide hover:text-designColor duration-300">
                                <Link
                                    to={link}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="cursor-pointer"
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                        <motion.li 
                            variants={buttonVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <a 
                                href={resume} 
                                download="LowellPioquintoResume.pdf" 
                                className="text-white font-bold py-2 px-4 rounded-full text-sm bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-700 hover:to-teal-600 duration-300 no-underline"
                            >
                                Download My CV
                            </a>
                        </motion.li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
