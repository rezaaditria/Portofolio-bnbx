"use client";
import React from "react";
import Boxcustom from "../Bento/Boxcustom";
import { useRef, useEffect } from "react";

//  for sizing project:
//  1-3-6
//  for sizing other adjust manually:
//  1-4-8

const Contact = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        const rotation = scrollY * 0.0;
        imageRef.current.style.transform = `rotate(${rotation}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items = [
    {
      image: "/images/ty.png",
      size: " sm:col-span-1 md:col-span-2 lg:col-span-4",
      title: "",
      description: "",
    },
    {
      title: "",
      title2: "",

      subtitle:
        '"I am a passionate college student currently exploring the world of technology, specifically in the field of Telecommunications Engineering. With a background in Telecommunications Engineering, I have a deep interest in understanding how technology influences the way we communicate and interact. I love coding, where I enjoy the challenge of developing innovative applications and technological solutions. Currently, I am actively learning and pursuing a deeper understanding of the world of technology, as well as working on various projects and coursework. I believe that with dedication and hard work, I can continue to grow and make a positive contribution to this industry."',

      miniprofile: "/images/poto.jpeg",

      introduce: "Hey, thanks for visiting!",

      Role: "Contact me",

      linkIG: "https://www.instagram.com/rezaaditriaa/",
      iconIG: "/images/IGW.png",
      linklinked: "https://www.linkedin.com/in/rezaaditria/",
      iconlinked: "/images/LW.png",
      size: " sm:col-span-1 md:col-span-4 lg:col-span-8",
    },
  ];

  return (
    <div className="container mx-auto p-1 mb-20">
      <div className="mx-4 md:mx-16 lg:mx-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4 px-2 md:px-5 py-0">
          {items.map((kontak, index) =>
            kontak.image ? (
              <div
                key={index}
                className={`bg-white opacity-100 rounded-tl-[30px] rounded-tr-[10px] rounded-br-[30px] rounded-bl-[10px] p-4 text-center ${kontak.size}`}
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
                    src={kontak.image}
                    className="w-full h-auto rounded-full ring-2 ring-red-500"
                  />
                </div>
              </div>
            ) : (
              <div
                key={index}
                className={`bg-white opacity-100 rounded-tl-[30px] rounded-tr-[10px] rounded-br-[30px] rounded-bl-[10px] p-4 text-center ${kontak.size}`}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(20px)",
                  overflow: "hidden",
                }}
              >
                <div className="flex-shrink-0 flex items-center justify-between mt-4 ml-4 md:ml-10 mr-0">
                  <div className="flex items-center">
                    <div className=" text-black text-start ">
                      <p className="text-base md:text-lg font-bold">
                        {kontak.introduce}
                      </p>
                      <p className="text-xs md:text-sm opacity-70">
                        {kontak.Role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <a
                      href={kontak.linkIG}
                      className=" transform transition-all hover:scale-150"
                    >
                      <img
                        src={kontak.iconIG}
                        className="w-[30px] md:w-[50px] h-auto"
                      />
                    </a>
                    <a
                      href={kontak.linklinked}
                      className="mr-2 transform transition-all hover:scale-150"
                    >
                      <img
                        src={kontak.iconlinked}
                        className="w-[30px] md:w-[50px] h-auto"
                      />
                    </a>
                  </div>
                </div>
                <div className="text-sm md:text-xl text-white text-justify font-light mt-4 md:mt-6  md:mb-10  md:ml-10  md:mr-10 indent-5">
                  {kontak.subtitle}
                </div>
                <div className="text-gray-600 mt-2">{kontak.description}</div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
