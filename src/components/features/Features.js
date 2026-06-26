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
    <section id='features' className="w-full py-20 border-b-[1px] border-b-borderColor">
      <Title title="Features" des="What I Do" />
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="show" // Animates the items when they come into view
          viewport={{ once: true }} // Ensures animation only happens once
        >
         <motion.div variants={itemVariants}>
          <Card 
            title="Full-Stack & Cloud Engineering"
            des="I design, architect, and deploy scalable web architectures from the ground up. My experience ranges from building custom responsive frontends in React to engineering production-ready backends with Node.js and Flask APIs, backed by Firebase and relational databases. I focus on high-availability deployments leveraging AWS (EC2) infrastructure, implementing robust REST APIs, and automating enterprise-grade data workflows that maintain critical corporate pipelines."
            icon={<MdWebStories />} // Or an architecture icon like FaServer / LuNetwork
          />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card 
          title="Intelligent Systems & AI Integration"
          des="I specialize in bridging the gap between core software architecture and modern machine learning models. My work includes integrating advanced AI strategies into software systems to optimize operational pipelines, deploying custom Transformer NLP pipelines for live data tracking, and utilizing LLM APIs to drive intelligent feature automation. I build systems that process complex logic, from Monte Carlo Tree Search engines to automated multi-role validation tools."
          icon={<FaDatabase />} // Or a brain/AI icon like GiArtificialIntelligence / FaBrain
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card 
          title="Human-Computer Interaction & XR"
          des="Winner of the 2025 Derril C. Rohlfs Award and the 2024 Festival of Animation Award for Best VR Experience. I merge advanced hardware integration with creative software to build immersive user interfaces. My portfolio includes building native Android spatial capturing tools for Meta Aria smart glasses and developing real-time, physics-based interactive environments in Unity for the Meta Quest platform, prioritizing seamless, human-centered design."
          icon={<MdHeadphones />} // Or a controller/glasses icon like FaVrCardboard
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card 
          title="Mobile Applications"
          des="I engineer native, high-performance mobile applications using Kotlin, Java, and modern Jetpack Compose layouts. My experience spans the entire development lifecycle—from implementing live video streaming and real-time device sensor capturing to building full-stack asynchronous networks that feed into backend API pipelines, ensuring responsive and highly intuitive user experiences on Android devices."
          icon={<MdSmartphone />}
        />
      </motion.div>
        </motion.div>
    </section>
  );
}

export default Features;
