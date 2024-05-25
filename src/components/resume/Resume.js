import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';

const Resume = () => {
    const [activeSection, setActiveSection] = useState('education');

    // Function to handle click events
    const handleClick = (section) => {
        setActiveSection(section);
    };

    // Function to return additional styles if the section is active
    const activeStyle = (section) => activeSection === section ? { background: 'linear-gradient(to right, #3B82F6, #4ADE80)', color: 'white', fontSize: '1.4rem', boxShadow: '0 0 10px rgba(0,0,0,0.5)', backgroundSize: '200% 100%', backgroundPosition: '100% 50%', transition: 'background-position 1.5s ease-in-out' } : { fontSize: '1.2rem' };

    return (
        <section id="resume" className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center items-center text-center '>
                <Title 
                  //  title="2+ YEARS OF IT EXPERIENCE"
                    des="My Resume"
                />
            </div>
            {/* Updated class list for responsiveness */}
            <ul className='w-full flex flex-col sm:flex-row justify-center text-center gap-4' style={{ fontSize: '1.4rem' }}>
                <li 
                    onClick={() => handleClick('education')}
                    style={activeStyle('education')}
                    className='resumeli'>Education
                </li>
                <li 
                    onClick={() => handleClick('skills')}
                    style={activeStyle('skills')}
                    className='resumeli'>Professional Skills
                </li>
                <li 
                    onClick={() => handleClick('experience')}
                    style={activeStyle('experience')}
                    className='resumeli'>Experience & Achievements
                </li>
            </ul>
            {activeSection === 'education' && <Education />}
            {activeSection === 'skills' && <Skills />}
            {activeSection === 'experience' && <Experience />}
        </section>
    );
}

export default Resume;
