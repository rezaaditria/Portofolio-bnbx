"use client"
import React, { useState } from "react";

const Skill = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const skill = [
    {
      skill1: "/images/Skills/html.png",
      skill2: "/images/Skills/css.png",
      skill3: "/images/Skills/js.png",
      skill4: "/images/Skills/react.png",
      skill5: "/images/Skills/njs.png",
      skill6: "/images/Skills/tailwind.png",
      skill7: "/images/Skills/C.png",
      skill8: "/images/Skills/py.png",
      skill9: "/images/Skills/ts.png",
      skill10: "/images/Skills/Apexchart.png",
      skill11: "/images/Skills/mongo.png",
      skill12: "/images/Skills/node.png",
      description: "This is the third item.",
      size: " col-span-12",
    },
  ];
  
  return (
    <div className="container mx-auto p-1 grid-cols-12 mt-4">
      <div className="mx-4 md:mx-16 lg:mx-32">
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-3 px-2 md:px-5 py-0">
        {skill.map((item, index) => (
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
                item.skill10,
                item.skill11,
                item.skill12,
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
    </div>
  );
};

export default Skill;
