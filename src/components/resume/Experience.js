import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import schoolIconImage from "./George_Washington_University_seal.png"; // Import the PNG image
import tricorp from "./tricorp.png"; // Import TriCorp image
import bnaLogo from "./bna_logo.png"; // Import B&A logo
import thaddeusLogo from "./thaddeus_logo.png"; // Import Thaddeus logo
import bamlogo from "./bam_logo.png"; // Import Thaddeus logo

const WorkExperience = () => {
  const schoolIconStyles = { background: "#373737" };
  const timelineElements = [
    {
      id: 1,
      title: "Software Engineer",
      corporation: "Bart and Associates, Inc.",
      location: "Washington, DC",
      description: "Integrated AI strategies into the ATS, streamlining the hiring pipeline and increasing recruiting productivity by 20%. Developed and maintained the core 5+ year old WordPress platform by patching security vulnerabilities, optimizing performance, and creating multiple landing pages/websites for BNA joint ventures. Engineered an automated web-scraping pipeline to retain BNA contracts worth over $100K each, using SharePoint, Jira, Google Gemini, and Power Automate in an Atlassian environment.",
      date: "Sep 2024 - Jun 2026",
      image: bnaLogo
    },
    {
      id: 2,
      title: "Afterschool Stem Instructor",
      corporation: "Brains and Motion Education",
      location: "San Francisco, CA",
      description: "Organized daily educational programs for 20+ third-grade students in a bilingual environment, delivering hands-on STEM, Arts, and Sports (STEAM) curriculum tailored to a diverse Latine community. Structured dedicated academic mentoring blocks to guide students through homework completion, improving baseline understanding of core subjects while managing active 'brain breaks' and recreational recess activities. Leveraged professional Spanish proficiency to facilitate cross-cultural learning, ensuring inclusive communication with students, parents, and school staff.",
      date: "Aug 2025 - Jun 2026",
      image: bamlogo
    },
    {
      id: 3,
      title: "Advanced Topics in Augmented Reality TA",
      corporation: "George Washington University",
      location: "Washington, DC",
      description: "Acted as TA for a senior-level AR course focused on cutting-edge AR technologies and interaction techniques. Aided in curriculum planning and one-on-one student mentoring for AR capstone projects involving passthrough vision and hand-tracking.",
      date: "January 2025 - May 2025",
      image: schoolIconImage
    },
    {
      id: 4,
      title: "AR/VR Teaching Assistant",
      corporation: "George Washington University",
      location: "Washington, DC",
      description: "Supported the instruction of Augmented and Virtual Reality course content. Assisted with Unity tutorials, grading, and mentoring students on XR development projects. Led lab sessions and coordinated project showcases in collaboration with faculty.",
      date: "August 2024 - December 2024",
      image: schoolIconImage
    },
    {
      id: 5,
      title: "Web Development Intern",
      corporation: "Thaddeus Resource Center",
      location: "Remote",
      description: "Redesigned nonprofit website to improve accessibility and content structure. Worked directly with stakeholders to ensure mission clarity and effective information flow. Focused on WordPress development and UI/UX improvements.",
      date: "May 2024 - January 2025",
      image: thaddeusLogo
    },
    {
      id: 6,
      title: "Software Development Intern (Previous)",
      corporation: "Bart & Associates, Inc.",
      location: "McLean, VA",
      description: "During my internship at Bart & Associates, I designed the layout and authored content for the 2024 end-of-year newsletter, ensuring brand consistency and clear messaging. I advised company leadership on AI integration strategies to optimize HR and payroll systems, including automation pipelines and data-driven insights. I also collaborated with the IT department to maintain and enhance the company website, focusing on improved hosting infrastructure and cybersecurity protocols.",
      date: "June 2023 - Current",
      image: bnaLogo
    },
    {
      id: 7,
      title: "Databases Learning Assistant",
      corporation: "George Washington University",
      location: "Washington, DC",
      description: "I Collaborated with the graduate assistant to facilitate lab sessions and enhance students' learning experiences. Held regular office hours and addressed questions. I provided valuable support to students, offering additional insights into course material and teaching coding languages such as Python, SQL, CSS, HTML, and Amazon Databases to enhance proficiency. Worked closely with the professor, to enhance the curriculum and implement strategies to increase student engagement and learning during class.",
      date: "January 2024 - May 2024",
      image: schoolIconImage
    },
    {
      id: 8,
      title: "Software Engineering Learning Assistant",
      corporation: "George Washington University",
      location: "Washington, DC",
      description: "I Collaborated with the graduate assistant to facilitate lab sessions and enhance students' learning experiences. Held regular office hours and addressed questions. I provided valuable support to students, offering additional insights into course material such as JavaSwing, Software Development, and Java to enhance proficiency. Worked closely with the professor, to enhance the curriculum and implement strategies to increase student engagement and learning during class.",
      date: "August 2023 - December 2023",
      image: schoolIconImage
    },
    {
      id: 9,
      title: "IT and Web Developer Lead",
      corporation: "TriCorp",
      location: "Charleston, SC",
      description: "Architected and deployed the company website using React and JavaScript, hosted on GitHub Pages with custom domain configuration, enhancing online presence and accessibility. Directed end-to-end development initiatives including UI/UX design, responsive front-end implementation, and mobile optimization, utilizing full-stack skills to improve overall user engagement and satisfaction. At TriCorp, I developed and launched the company's website, which led to a substantial surge in online traffic. I monitored its performance and ensured seamless user experiences and swift page loading times through timely updates. This experience honed my skills in a professional IT/Web Development setting, allowing me to successfully execute multiple projects that revamped the company's IT infrastructure and productivity.",
      date: "Jun 2022 - Jun 2025",
      image: tricorp
    }
  ];

  return (
    <div className="w-full">
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor1 tracking-[4px] uppercase font-bold">2022 to Present!</p>
        <h2 className="text-3xl lg:text-4xl font-bold">My Work Experience Background</h2>
      </div>
      <VerticalTimeline className="p-8 custom-timeline">
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date text-lg text-lightText"
              iconStyle={schoolIconStyles}
              icon={
                element.image ? (
                  <img
                    src={element.image}
                    alt="Company Logo"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <img
                    src={schoolIconImage}
                    alt="School Icon"
                    className="w-full h-full rounded-full object-cover"
                  />
                )
              }
              iconClassName="flex items-center justify-center"
              className="vertical-timeline-element mb-8 p-6"
              contentStyle={{ 
                background: "linear-gradient(to bottom, #252525, #252525)",
                color: "lightText",
                boxShadow: "none",
                border: "none",
              }}
              contentArrowStyle={{ borderRight: "7px solid #252525" }}
            >
              <h3 className="text-2xl font-bold mb-2">{element.title}</h3>
              <h4 className="text-xl mb-2">{element.corporation}</h4>
              <h5 className="text-xl mb-4">{element.location}</h5>
              <p className="text-lg mb-8">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;