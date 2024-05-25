import React from 'react';
import Title from '../layouts/Title';
import Card from './Card';
import { MdWebStories, MdSmartphone, MdHeadphones } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { motion } from 'framer-motion'; // Import Framer Motion

const Features = () => {
  // Variants for the container to stagger the children's animation
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5, // Delay between each child animation
      },
    },
  };

  // Variants for each child (Card component)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id='features' className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do"/>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="show" // Animates the items when they come into view
          viewport={{ once: true }} // Ensures animation only happens once
        >
          <motion.div variants={itemVariants}>
            <Card 
              title="Web Development"
              des="I have honed my skills in web development through hands-on projects and coursework. My passion for crafting visually appealing and user-friendly websites stems from my experience in software engineering, databases, and graphics. I excel in HTML, CSS, JavaScript, and React, leveraging these technologies to bring creative ideas to life and visualize data in a digital format. From developing real-time chat software to designing immersive virtual reality experiences, my diverse project portfolio demonstrates my ability to tackle complex challenges and deliver innovative solutions. I am committed to staying abreast of the latest trends and technologies in web development, with a goal of making the web more engaging and accessible for all users."
              icon={<MdWebStories />}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
          <Card 
            title="Augmented and Virtual Reality"
            des= "My expertise in augmented and virtual reality (AR/VR) stems from my coursework and hands-on projects in computer science. I have experience in  concepts such as graphics and ARVR. I have practical experience developing immersive experiences, such as DinoDrive, a virtual reality Jurassic adventure for the MetaQuest 3 platform, which won the 2024 Festival of Animation award for best VR experience. Leveraging Unity and advanced VR technologies, I created interactive ride experiences and educational platforms that engage users and enhance learning. With a strong foundation in software engineering and a passion for pushing the boundaries of technology, I am excited to continue exploring the possibilities of AR/VR and contributing to its advancement."
            icon={<MdHeadphones/>}
          />
        </motion.div>
          <motion.div variants={itemVariants}>
            <Card 
              title="Database Building"
              des="With a strong foundation in database management, I have demonstrated my proficiency in designing and implementing robust database solutions. Through coursework and hands-on projects, I have gained expertise in database systems and SQL. I have successfully led projects such as the Application Registration and Advising System (ARGS), where I developed and integrated a fully functioning back-end system for a university, showcasing my ability to organize data effectively and ensure seamless functionality. My attention to detail and problem-solving skills have enabled me to optimize database performance and ensure data integrity, contributing to the success of various software projects."
              icon={<FaDatabase />}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card 
              title="Mobile Applications"
              des="My passion for mobile application development is evident in my diverse project portfolio and coursework. Leveraging languages such as Kotlin and Java, I have developed intuitive mobile applications that enhance user experiences and streamline processes. From the PUMP app, which enables users to track their workouts seamlessly, to developing and launching mobile applications for Android devices, I have demonstrated my ability to engineer innovative solutions that meet user needs. With a keen eye for design and a dedication to staying current with mobile technology trends, I am poised to continue creating impactful mobile applications that make a difference in users' lives."
              icon={<MdSmartphone />}
            />
          </motion.div>
        </motion.div>
    </section>
  );
}

export default Features;
