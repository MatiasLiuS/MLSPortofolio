import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import schoolIconImage from "./George_Washington_University_seal.png"; // Import the PNG image
import tricorp from "./tricorp.png"; // Import Harpoon Harry's image

const WorkExperience = () => {
  const schoolIconStyles = { background: "#373737" };
  const timelineElements = [
    {
      id: 1,
      title: "Databases Learning Assistant",
      corporation: "George Washington University",
      location: "Washington, DC",
      description: "I Collaborated with the graduate assistant to facilitate lab sessions and enhance students' learning experiences. Held regular office hours and addressed questions. I provided valuable support to students, offering additional insights into course material and teaching coding languages such as Python, SQL, CSS, HTML, and Amazon Databases to enhance proficiency. Worked closely with the professor, to enhance the curriculum and implement strategies to increase student engagement and learning during class.",
      date: "August 2024 - May 2024",
      image: schoolIconImage 
    },
    {
      id: 2,
      title: "Software Engineering Learning Assistant",
      corporation: "George Washington University",
      location: "Washington, DC",
      description: "I Collaborated with the graduate assistant to facilitate lab sessions and enhance students' learning experiences. Held regular office hours and addressed questions. I provided valuable support to students, offering additional insights into course material such as JavaSwing, Software Development, and Java to enhance proficiency. Worked closely with the professor, to enhance the curriculum and implement strategies to increase student engagement and learning during class.",
      date: "August 2023 - December 2023",
      image: schoolIconImage 
    },
    {
      id: 3,
      title: "IT / Web Developer",
      corporation: "TriCorp",
      location: "Charleston, South Carolina",
      description: "At TriCorp, I developed and launched the company's website, which led to a substantial surge in online traffic. I monitored its performance and ensured seamless user experiences and swift page loading times through timely updates. This experience honed my skills in a professional IT/Web Development setting, allowing me to successfully execute multiple projects that revamped the company's IT infrastructure and productivity.",
      date: "June 2022 - August 2022",
      image: tricorp
    },
  ];

  return (
    <div className="w-full">
      <div className="py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px] uppercase">2021 to Present!</p>
            <h2 className="text-3xl lg:text-4xl font-bold">My Work Experience Background</h2>
      </div>
      <VerticalTimeline className="p-8 custom-timeline">
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date text-lg text-black"
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
              className="vertical-timeline-element mb-8 p-6 sm:p-2" // Updated class for smaller devices
              contentStyle={{ 
                background: "linear-gradient(to bottom, #ffffff, #f3f3f3)",
                color: "#333333",
                borderRadius: "10px", // Added border-radius for square boxes
              }}
            >
              <h3 className="text-xl font-bold mb-2">{element.title}</h3> {/* Decreased text size for smaller devices */}
              <h4 className="text-lg mb-1">{element.corporation}</h4> {/* Decreased text size for smaller devices */}
              <h5 className="text-base mb-2">{element.location}</h5> {/* Decreased text size for smaller devices */}
              <p className="text-sm mb-8">{element.description}</p> {/* Decreased text size and squared description */}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;
