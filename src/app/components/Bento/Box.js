"use client";
import React, { useState } from "react";

const BentoBox = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="mx-4 md:mx-16 lg:mx-32">
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-3 px-2 md:px-5 py-0">
        {items.map((item, index) => (
          <div
            key={index}
            className={`rounded-3xl p-2 md:p-4 text-center ${item.size}`}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="text-white text-xl md:text-2xl lg:text-4xl font-bold font-sans my-2">
              {item.title}
            </h3>
            <ul className="grid grid-cols-3 gap-2 md:gap-4 p-2 md:p-5">
              {[
                item.skill1,
                item.skill2,
                item.skill3,
                item.skill4,
                item.skill5,
                item.skill6,
                item.skill7,
                item.skill8,
                item.skill9,
              ].map((skill, skillIndex) => (
                <li key={skillIndex} className="mx-auto mb-3">
                  <img
                    src={skill}
                    className="w-[50px] md:w-[100px] h-auto rounded-md transition-transform hover:scale-150"
                    alt={`Skill ${skillIndex + 1}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoBox;
