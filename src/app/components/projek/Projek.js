"use client";
import React, { useState } from "react";

const Projek = () => {
  const [tappedIndex, setTappedIndex] = useState(null);

  const handleTouchStart = (index) => {
    if (tappedIndex === index) {
      setTappedIndex(null); // Toggle off if already tapped
    } else {
      setTappedIndex(index); // Set the tapped index
    }
  };

  const handleTouchMove = (e) => {
    e.stopPropagation(); // Prevent parent elements from scrolling
  };

  const projek = [
    {
      image: "/images/projek/eos.png",
      title: "Dashboard Auto insight",
      // description:
      //   "In the Dashboard Auto Insight project, I focus on crafting the user-friendly interface and diverse charts to visualize data effectively. Collaborating with design and backend teams, my goal is to deliver an efficient frontend experience that empowers users to gain insights effortlessly. The project is owned by PT Telkom Indonesia, where I'm interning.",
      description2: "(organization only, live demo & repository unavailable)",
      size: "sm:col-span-1 md:col-span-1 lg:col-span-1",
      liveLink: null, // Add the live project link here
      repoLink: null, // Add the repository link here
    },
    {
      image: "/images/projek/mbclab.png",
      title: "MBC Laboratory website",
      // description:
      //   "As a frontend developer on the MBC Lab project, I design and implement user-friendly interfaces and interactive components. Using modern frontend technologies, I ensure the application is visually appealing, responsive, and intuitive, enhancing the overall user experience. Through close collaboration with the backend team, I facilitate seamless and efficient data interactions, contributing to the project's success.",
      size: "sm:col-span-1 md:col-span-1 lg:col-span-1",
      liveLink: "https://website-umber-alpha.vercel.app/", // Add the live project link here
      repoLink: "https://github.com/mbclab23/Website/tree/development", // Add the repository link here
    },
    // +++++++++++++++++++++++++++++++++++++++++++++++++
  ];

  return (
    <div className="container mx-auto p-1">
      <div className="mx-4 md:mx-16 lg:mx-36">
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
                  cursor: "pointer", // Add cursor pointer style
                }}
                onMouseEnter={() => setTappedIndex(index)} // Show text box on hover
                onMouseLeave={() => setTappedIndex(null)} // Hide text box on hover out
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
                    <div className="bg-gradient-to-t from-[#00224D]  to-transparent w-full max-h-40 overflow-y-auto bg-opacity-80 p-4 rounded-b-3xl md:max-h-none md:h-15">
                      <h3 className="text-white text-base md:text-xl font-bold font-sans  ">
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
