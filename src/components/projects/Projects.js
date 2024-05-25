import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Title from '../layouts/Title';
// Ensure these imports point to your actual images and videos
import { img1, img2, img3, img4, img5, vid3, img6, vid1, vid2, vid4, img7, vid5, img8,} from '../../assets';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSwipeable } from 'react-swipeable'; 

function Projects() {
  const slides = [
    {
      //PORTOFOLIO PROJECT
      url: img1,
      title: 'Portfolio',
      description: 'My Personal Portofolio',
      githubUrl: 'https://github.com/MatiasLiuS/MLSPortofolio',
      languages: ['HTML', 'Tailwind CSS', 'JavaScript', 'React.JS'],
      webButton: {
        url: 'https://matiasliuschmid.com/',
        label: 'Visit Portfolio',
        bgColor: 'bg-green-500',
        hoverColor: 'hover:bg-green-700',
      },
    },
    {
      //NEURO SCIENCE
      url: img2,
      title: 'The Neuroscience Notebook',
      description: 'This podcast that was made as a special project by honors students at the George Washington University as part of the class “History of Neuroscience” taught by Professor Leo Chalupa. I held my own episode titled "The Impact of Video Games on Cognition and Mental Health", as well as developing the website for the class. [NOTE: The Website is down due to the class ending]',
      githubUrl: 'https://github.com/MatiasLiuS/NeuroscienceNotebook.github.io',
      languages: ['HTML', 'CSS', 'JavaScript'],
      videoUrl:vid1,
      webButton: {
        url: vid1,
        label: 'View Demo!',
        bgColor: 'bg-green-500',
        hoverColor: 'hover:bg-green-700',
      },
    },
    {
      //PUMP
      url: img3,
      title: 'PUMP: Workout Manager Mobile App',
      description: 'Led the development for a Workout manager mobile app. Utilized Android Studio, Firebase, and Android Studio to develop the front end and back end',
      githubUrl: 'https://github.com/MatiasLiuS/PUMP-WorkoutManagerApp',
      languages: ['Android Studio', 'Kotlin', 'XML', 'RESTAPI', 'Firebase'],
      webButton: {
        url: 'https://docs.google.com/document/d/19MD85hPAgJOyAblBiPVllx9KAlpENq3u/edit?usp=sharing&ouid=114003333753997662561&rtpof=true&sd=true',
        label: 'View Project Report!',
        bgColor: 'bg-green-500',
        hoverColor: 'hover:bg-green-700',
      },
    },
    //ARGS
    {
      url: img4,
      title: 'ARGS - University Database',
      description: 'Team project of 3. We developed a Application Registration and Advising System, in which we utilized MySQL, HTML, CSS, Python, and over 20 different queries with set theory to create a mock database of information within a university. Alongside this, an admin page was created to display all information ranging from student records to financial payments. I am responsible for the UI and styling, as well as the Admisions component the system. [NOTE: not sponsored or affiliated with Panera]',
      githubUrl: 'https://github.com/MatiasLiuS/ARGS-SIP-University-Portal',
      languages: ['Python', 'MySQL', 'CSS', 'HTML'],
      webButton: {
        label: 'Live demo coming soon!',
        bgColor: 'bg-gray-500',
        hoverColor: 'hover:bg-red-700',
      },
    },
    {
      url: img5,
      title: 'Slack Simulator',
      description: 'Created a Chat Room simulator that connects to a port with a valid IP address. Included within this has a members list as well as a history of messages found within the system.',
      githubUrl: 'https://github.com/MatiasLiuS/GWackChatSimulator',
      languages: ['Java', 'JavaSwing'],
      videoUrl: vid3,
      webButton: {
        url: vid3,
        label: 'Watch a live demo!',
        bgColor: 'bg-green-500',
        hoverColor: 'hover:bg-green-700',
      },
    },
    {
      url: img6,
      title: 'Shopping Cart',
      description: 'Built with Python, CSS, HTML, and sqlite3. Seamlessly register, login, and shop for a wide range of products. It provides a user-friendly interface, real-time stock updates, and automatic price calculations. Explore past orders effortlessly with the intuitive database system.',
      githubUrl: 'https://github.com/MatiasLiuS/ShoppingCart',
      languages: ['Python', 'CSSs', 'HTML', 'sqlite3'],
      videoUrl: vid2,
      webButton: {
        url: vid2,
        label: 'Watch a live demo!',
        bgColor: 'bg-green-500',
        hoverColor: 'hover:bg-green-700',
      },
    },
    {
      url: img7,
      title: 'SolAR',
      description: 'Welcome to the SolAR app! This app allows you to explore the solar system in augmented reality, providing information about each planet and allowing you to toggle various features like the sun and the background.',
      githubUrl: 'https://github.com/MatiasLiuS/solAR',
      languages: ['Unity', 'iOS', 'Augmented Reality'],
      videoUrl: vid4,
      webButton: {
        url: vid4,
        label: 'Watch the Trailer!',
        bgColor: 'bg-green-500',
        hoverColor: 'hover:bg-green-700',
      },
    },
    {
      url: img8,
      title: 'DinoDrive',
      description: 'Dino Drive presents an enthralling virtual reality experience, inviting users to embark on an unforgettable adventure through the ancient world of dinosaurs. Developed using Unity 2021.3.9f, Dino Drive is meticulously crafted to deliver an immersive journey tailored for the Meta Quest 2 device. DinoDrive won the GWU 2024 Festival of Animation award for best Virtual Reality Experience',
      githubUrl: 'https://github.com/MatiasLiuS/DinoDrive',
      languages: ['Unity', 'Meta Quest 2', 'Virtual Reality'],
      videoUrl: vid5,
      webButton: {
        url: vid5,
        label: 'Watch the Trailer!',
        bgColor: 'bg-green-500',
        hoverColor: 'hover:bg-green-700',
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const navigateSlide = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'next') {
        return prevIndex < slides.length - 1 ? prevIndex + 1 : 0;
      } else {
        return prevIndex > 0 ? prevIndex - 1 : slides.length - 1;
      }
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
    <section id="projects" className="w-full py-20 border-b border-black sm:py-24">
      <div className="flex justify-center items-center text-center px-4 sm:px-6 lg:px-8 xl:px-10 mb-8">
        <Title title="VISIT MY PORTFOLIO AND SEND YOUR FEEDBACK" des="My Projects" />
      </div>
      <motion.div
        {...handlers}
        className="max-w-7xl w-full m-auto py-8 px-2 sm:py-16 sm:px-4 lg:px-6 xl:px-8 relative group flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10"
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={animation}
        ref={ref}
        style={{ height: "500px", width: "100%" }} // Fixed size container
      >
        {[-1, 0, 1].map((position) => {
          const cardIndex = currentIndex + position < 0 ? slides.length + (currentIndex + position) : (currentIndex + position) % slides.length;
          const slide = slides[cardIndex];
          const cardVariants = {
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0, transition: { duration: 1, type: 'spring', stiffness: 50, delay: position * 0.3 } },
          };
          return (
            <motion.div key={cardIndex} variants={cardVariants} className={`transition-opacity duration-500 transform ${position === 0 ? 'opacity-100 scale-105' : 'opacity-50 scale-100 blur-sm'} flex-none w-11/12 sm:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl`}>
              <img src={slide.url} alt={slide.title} className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-t-lg" />
              <div className="bg-white shadow-lg rounded-b-lg p-4 sm:p-6 md:p-8">
                <div className="font-bold text-xl mb-2">{slide.title}</div>
                <p className="text-gray-700 text-base mb-2">
                  {slide.description}
                </p>
                <div>
                  {slide.languages && slide.languages.map((language, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 hover:bg-teal-300 glow-on-hover hover:cursor-pointer sm:px-3 sm:py-1 sm:text-sm md:px-3 md:py-1 md:text-sm">
                      {language}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex justify-left gap-2 sm:gap-4">
                  <a href={slide.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xs sm:text-sm inline-block glow-on-hover">
                    View on GitHub
                  </a>
                  {slide.webButton && (
                    <a href={slide.webButton.url} target="_blank" rel="noopener noreferrer" className={`${slide.webButton.bgColor} ${slide.webButton.hoverColor} text-white font-bold py-2 px-4 rounded-full text-xs sm:text-sm inline-block glow-on-hover`}>
                      {slide.webButton.label}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
        <BsChevronCompactLeft className="absolute left-0 text-3xl sm:text-4xl rounded-full text-gray-800 hover:text-gray-900 cursor-pointer z-10 bg-gray-200 p-1" onClick={() => navigateSlide('prev')} />
        <BsChevronCompactRight className="absolute right-0 text-3xl sm:text-4xl rounded-full text-gray-800 hover:text-gray-900 cursor-pointer z-10 bg-gray-200 p-1" onClick={() => navigateSlide('next')} />
      </motion.div>
      <div className="flex justify-center items-center mt-20"> {/* Increased margin-top for more space */}
        {slides.map((_, index) => (
          <div key={index} className={`h-4 w-4 rounded-full mx-1 ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}></div>
        ))}
      </div>
    </section>
  );
}

export default Projects;