"use client";
import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5,
  });

  const experiences = [
    {
      company: "PT. Telekomunikasi Indonesia",
      role: "Front-end Developer",
      date: "February 2024 - June 2024",
      description:
        "Integrating raw data to data visual using Apexchart, and implementing drag and drop using DnDkit library to Dashboard auto insight project.",
    },
    {
      company: "Multimedia Application, Big Data and Cybersecurity Laboratory",
      role: "Research assistant",
      date: "October 2023 - present",
      description: "Cybersecurity research division.",
    },
    {
      company: "Basic Computer Laboratory",
      role: "Assistant practicum",
      date: "October 2022 - June 2024",
      description: "Teaching Basic programming using C language.",
    },
  ];

  return (
    <div className="container mx-auto p-1 mb-20">
      <div ref={ref} className={`mx-4 md:mx-16 lg:mx-32 mt-4 transition-transform duration-2000 ease-in-out 
        ${inView ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div
          className={`rounded-3xl p-2 md:p-4 text-center `}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
            <div className="md:col-span-5 flex flex-col space-y-2">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedExperience(exp)}
                  className={`cursor-pointer bg-gradient-to-r from-transparent via-[#00224D] to-transparent text-white p-4 text-center 
                    hover:bg-gradient-to-l hover:from-transparent hover:via-[#5D0E41] hover:to-transparent`}
                >
                  <h3 className="text-l font-semibold">{exp.company}</h3>
                  <p className="font-extralight">{exp.date}</p>
                </div>
              ))}
            </div>
            <div className="md:col-span-2 flex justify-center items-center">
              <div className="w-1 border-l border-white-500 h-full"></div>
            </div>
            <div className="md:col-span-5 flex justify-center items-center text-white lg:pr-10">
              <div>
                {selectedExperience ? (
                  <>
                    <h2 className="text-3xl font-bold text-[#FF204E]">
                      <span className="bg-gradient-to-r from-[#FF204E] via-[#5D0E41] to-[#00224D] bg-clip-text text-transparent">
                        {selectedExperience.role}
                      </span>
                    </h2>
                    <p className="font-extralight">
                      {selectedExperience.description}
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold"></h2>
                    <p className="font-light"></p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
