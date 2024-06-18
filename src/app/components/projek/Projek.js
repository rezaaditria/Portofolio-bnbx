"use client";
import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';

const Projek = () => {
  const [tappedIndex, setTappedIndex] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the container is in view
  });

  const handleTouchStart = (index) => {
    if (tappedIndex === index) {
      setTappedIndex(null);
    } else {
      setTappedIndex(index);
    }
  };

  const handleTouchMove = (e) => {
    e.stopPropagation();
  };

  const projek = [
    {
      image: "/images/projek/eos.png",
      title: "Dashboard Auto insight",
      description2: "(organization only, live demo & repository unavailable)",
      size: "sm:col-span-1 md:col-span-1 lg:col-span-1",
      liveLink: null,
      repoLink: null,
    },
    {
      image: "/images/projek/mbclab.png",
      title: "MBC Laboratory website",
      size: "sm:col-span-1 md:col-span-1 lg:col-span-1",
      liveLink: "https://website-umber-alpha.vercel.app/",
      repoLink: "https://github.com/mbclab23/Website/tree/development",
    },
  ];

  return (
    <div className="container mx-auto p-1">
      <div ref={ref} className={`mx-4 md:mx-16 lg:mx-36 transition-opacity duration-2000 ease-in-out 
        ${inView ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {projek.map((item, index) => (
            <div key={index}>
              <div
                className={`relative rounded-3xl text-center my-1 ${
                  item.size
                } ${tappedIndex === index ? "tapped" : ""}`}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setTappedIndex(index)}
                onMouseLeave={() => setTappedIndex(null)}
                onTouchStart={() => handleTouchStart(index)}
              >
                <img
                  src={item.image}
                  className="w-full h-auto rounded-3xl"
                  alt={item.title}
                />
                {tappedIndex === index && (
                  <div
                    className="absolute bottom-0 left-0 w-full flex items-center justify-center opacity-100 transition-opacity duration-500"
                    onTouchMove={handleTouchMove}
                  >
                    <div className="bg-gradient-to-t from-[#00224D] to-transparent w-full max-h-40 overflow-y-auto bg-opacity-80 p-4 rounded-b-3xl md:max-h-none md:h-15">
                      <h3 className="text-white text-base md:text-xl font-bold font-sans">
                        {item.title}
                      </h3>
                      <p className="text-black mt-2">{item.description}</p>
                      <p className="text-[#FF204E] italic mt-2">
                        {item.description2}
                      </p>
                      <div className="mt-4 flex justify-center">
                        {item.liveLink && (
                          <a
                            href={item.liveLink}
                            className="mr-4 bg-[#00224D] text-white px-4 py-2 rounded-full hover:bg-[#5D0E41] transition-colors"
                          >
                            Live Demo
                          </a>
                        )}
                        {item.repoLink && (
                          <a
                            href={item.repoLink}
                            className="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-colors"
                          >
                            Repository
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projek;
