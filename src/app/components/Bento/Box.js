"use client";
import React from "react";
import { useState } from "react";

const BentoBox = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="mx-32">
      <div className="grid sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-3 px-5 py-3 ">
        {items.map((item, index) =>
          item.skill1 ? (
            <div
              key={index}
              className={`rounded-3xl p-4 text-center ${item.size}`}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3 className="text-white text-4xl font-bold font-sans my-2">
                {item.title}
              </h3>
              <ul className="grid grid-cols-3 gap-4 p-5">
                <li className="mx-auto mb-3">
                  <img
                    src={item.skill1}
                    className="w-[100px] h-auto rounded-md transition-transform hover:scale-110"
                  />
                </li>
                <li className="mx-auto mb-3">
                  <img
                    src={item.skill2}
                    className="w-[100px] h-auto rounded-md transition-transform hover:scale-110"
                  />
                </li>
                <li className="mx-auto mb-3">
                  <img
                    src={item.skill3}
                    className="w-[100px] h-auto rounded-md transition-transform hover:scale-110"
                  />
                </li>
                <li className="mx-auto mb-3">
                  <img
                    src={item.skill4}
                    className="w-[100px] h-auto rounded-md transition-transform hover:scale-110"
                  />
                </li>
                <li className="mx-auto mb-3">
                  <img
                    src={item.skill5}
                    className="w-[100px] h-auto rounded-md transition-transform hover:scale-110"
                  />
                </li>
                <li className="mx-auto mb-3">
                  <img
                    src={item.skill6}
                    className="w-[100px] h-auto rounded-md transition-transform hover:scale-110"
                  />
                </li>
                <li className="mx-auto mb-3">
                  <img
                    src={item.skill7}
                    className="w-[100px] h-auto rounded-md transition-transform hover:scale-110"
                  />
                </li>
                <li className="mx-auto mb-3">
                  <img
                    src={item.skill8}
                    className="w-[100px] h-auto rounded-md transition-transform hover:scale-110"
                  />
                </li>
                <li className="mx-auto mb-3">
                  <img
                    src={item.skill9}
                    className="w-[100px] h-auto rounded-md transition-transform hover:scale-110"
                  />
                </li>
              </ul>
            </div>
          ) : item.project ? (
            <div
              key={index}
              className={`rounded-3xl p-4 text-center ${item.size}`}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.0)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3 className="text-white text-4xl font-bold font-sans my-2">
                {item.title}
              </h3>
            </div>
          ) : (
            <div
              key={index}
              className={`relative rounded-3xl text-center ${item.size}`}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={item.image}
                className="w-full h-auto rounded-3xl"
                alt={item.title}
              />
              {hoveredIndex === index && (
                <div className="absolute bottom-0 left-0 w-full flex items-center justify-center opacity-100 transition-opacity duration-1000">
                  <div className="bg-white w-full bg-opacity-80 p-4 rounded-b-3xl ">
                    <h3 className="text-[#FF204E] text-xl font-bold font-sans">
                      {item.title}
                    </h3>
                    <p className="text-black mt-2">{item.description}</p>
                  </div>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BentoBox;
