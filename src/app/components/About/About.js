import React from "react";
import Image from "next/image";
import BentoBox from "../Bento/Box";
import Boxcustom from "../Bento/Boxcustom";
import Boxfoto from "../Bento/Boxfoto";

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
      size: " sm:col-span-1 md:col-span-4 lg:col-span-8",
      linkIG: "https://www.instagram.com/rezaaditriaa/",
      iconIG: "/images/insta.png",
      linklinked: "https://www.linkedin.com/in/rezaaditria/",
      iconlinked: "/images/linkedin.png",
    },
    {
      image: "/images/poto.jpeg",
      size: " sm:col-span-1 md:col-span-2 lg:col-span-4",
      title: "",
      description: "",
    },
  ];

  const photo = [];

  const items = [
    {
      skill1: "/images/html.png",
      skill2: "/images/css.png",
      skill3: "/images/js.png",
      skill4: "/images/react.png",
      skill5: "/images/njs.png",
      skill6: "/images/tailwind.png",
      skill7: "/images/C.png",
      skill8: "/images/py.png",
      skill9: "/images/ts.png",
      title: "skills",
      description: "This is the third item.",
      size: " sm:col-span-1 md:col-span-6 lg:col-span-12",
    },
    {
      project: "null",
      title: "Project & experiences",
      size: " sm:col-span-1 md:col-span-6 lg:col-span-12",
    },
    {
      image: "/images/projek/eos.png",
      title: "Dashboard Auto insight",
      description:
        "In the Dashboard Auto Insight project, my main focus is on crafting the dashboard interface and various types of charts. I ensure that the interface is user-friendly and visually appealing, allowing users to interact seamlessly with their data. Collaborating with both design and backend teams, I develop diverse charts to visualize data effectively. My goal is to deliver an efficient frontend experience that empowers users to gain insights effortlessly. ",
      size: " sm:col-span-1 md:col-span-3 lg:col-span-6",
    },
    {
      image: "/images/projek/mbclab.png",
      title: "MBC Laboratory website",
      description:
        "As a frontend developer joining the MBC Lab project, my role focuses on designing and implementing user-friendly interfaces and interactive components. Utilizing modern frontend technologies, I ensure the application is visually appealing, responsive, and intuitive, enhancing the overall user experience. Through close collaboration with the backend team, I help create seamless and efficient data interactions, contributing to the success of the MBC Lab project.",
      size: " sm:col-span-1 md:col-span-3 lg:col-span-6",
    },

    // +++++++++++++++++++++++++++++++++++++++++++++++++
  ];

  return (
    <div className="container mx-auto p-1">
      <Boxcustom items={intro} />
      <Boxfoto items={photo} />
      <BentoBox items={items} />
    </div>
  );
};

export default Home;
