"use client";
import React, { useRef, useEffect } from "react";

const Boxcustom = ({ items }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        const rotation = scrollY * 0.1;
        imageRef.current.style.transform = `rotate(${rotation}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mx-4 md:mx-16 lg:mx-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4 px-2 md:px-5 py-0">
        {items.map((intro, index) =>
          intro.image ? (
            <div
              key={index}
              className={`bg-white opacity-100 rounded-tl-[30px] rounded-tr-[10px] rounded-br-[30px] rounded-bl-[10px] p-4 text-center ${intro.size}`}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(20px)",
                overflow: "hidden",
              }}
            >
              <div
                ref={imageRef}
                className="w-full h-auto"
                style={{
                  transformOrigin: "center",
                  transition: "transform 0.3s ease-out",
                }}
              >
                <img
                  src={intro.image}
                  className="w-full h-auto rounded-full ring-2 ring-red-500"
                />
              </div>
            </div>
          ) : (
            <div
              key={index}
              className={`bg-white opacity-100 rounded-tl-[30px] rounded-tr-[10px] rounded-br-[30px] rounded-bl-[10px] p-4 text-center ${intro.size}`}
            >
              <div className="flex-shrink-0 flex items-center justify-between mt-4 ml-4 md:ml-10 mr-0">
                <div className="flex items-center">
                  <img
                    src={intro.miniprofile}
                    className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full mr-2 md:mr-4"
                  />
                  <div className=" text-black text-start ">
                    <p className="text-base md:text-lg font-bold">
                      {intro.introduce}
                    </p>
                    <p className="text-xs md:text-sm opacity-50">
                      {intro.Role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <a
                    href={intro.linkIG}
                    className="mr-2 transform transition-all hover:scale-110"
                  >
                    <img
                      src={intro.iconIG}
                      className="w-[30px] md:w-[50px] h-auto"
                    />
                  </a>
                  <a
                    href={intro.linklinked}
                    className="mr-2 transform transition-all hover:scale-110"
                  >
                    <img
                      src={intro.iconlinked}
                      className="w-[30px] md:w-[50px] h-auto"
                    />
                  </a>
                </div>
              </div>
              <div className="text-2xl md:text-5xl text-sans text-[#FF204E] text-start font-bold ml-4 md:ml-10 mt-10 md:mt-20 mr-4 md:mr-20">
                {intro.title}
              </div>
              <div className="text-2xl md:text-5xl text-sans text-[#FF204E] text-start font-bold ml-4 md:ml-10 mb-4 md:mb-10 mr-4 md:mr-20">
                {intro.title2}
              </div>
              <div className="text-sm md:text-xl text-black text-start font-semibold mt-4 md:mt-6 mb-4 md:mb-10 ml-4 md:ml-10 mr-4 md:mr-[100px]">
                {intro.subtitle}
              </div>
              <div className="text-gray-600 mt-2">{intro.description}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Boxcustom;
