import React from "react";
import Boxcustom from "../Bento/Boxcustom";

//  for sizing project:
//  1-3-6
//  for sizing other adjust manually:
//  1-4-8

const Home = () => {
  const intro = [
    {
      title: "Passionate to pursue ",
      title2: "the technology.",
      subtitle:
        "I enjoy learning new things and try to overcome new challenges while analyzing how I improved through them.",
      miniprofile: "/images/poto.jpeg",
      introduce: "Hi, I'm Reza.",
      Role: "Front-end developer",
      linkIG: "https://www.instagram.com/rezaaditriaa/",
      iconIG: "/images/insta.png",
      linklinked: "https://www.linkedin.com/in/rezaaditria/",
      iconlinked: "/images/linkedin.png",
      linkgithub: "https://github.com/rezaaditria",
      icongithub: "/images/github.png",
      size: " sm:col-span-1 md:col-span-4 lg:col-span-8",
    },
    {
      image: "/images/poto.jpeg",
      size: " sm:col-span-1 md:col-span-2 lg:col-span-4",
      title: "",
      description: "",
    },
  ];

  return (
    <div className="container mx-auto p-1">
      <Boxcustom items={intro} />
    </div>
  );
};

export default Home;
