import React from "react";
import BentoBox from "../Bento/Box";

const Projek = () => {
  const projek = [
    {
      image: "/images/projek/eos.png",
      title: "Dashboard Auto insight",
      description:
        "In the Dashboard Auto Insight project, my main focus is on crafting the dashboard interface and various types of charts. I ensure that the interface is user-friendly and visually appealing, allowing users to interact seamlessly with their data. Collaborating with both design and backend teams, I develop diverse charts to visualize data effectively. My goal is to deliver an efficient frontend experience that empowers users to gain insights effortlessly. ",
      size: " sm:col-span-1 md:col-span-3 lg:col-span-12",
    },
    {
      image: "/images/projek/mbclab.png",
      title: "MBC Laboratory website",
      description:
        "As a frontend developer joining the MBC Lab project, my role focuses on designing and implementing user-friendly interfaces and interactive components. Utilizing modern frontend technologies, I ensure the application is visually appealing, responsive, and intuitive, enhancing the overall user experience. Through close collaboration with the backend team, I help create seamless and efficient data interactions, contributing to the success of the MBC Lab project.",
      size: " sm:col-span-1 md:col-span-3 lg:col-span-12",
    },

    {
      image: "/images/projek/eos.png",
      title: "Dashboard Auto insight",
      description:
        "In the Dashboard Auto Insight project, my main focus is on crafting the dashboard interface and various types of charts. I ensure that the interface is user-friendly and visually appealing, allowing users to interact seamlessly with their data. Collaborating with both design and backend teams, I develop diverse charts to visualize data effectively. My goal is to deliver an efficient frontend experience that empowers users to gain insights effortlessly. ",
      size: " sm:col-span-1 md:col-span-3 lg:col-span-12",
    },
    // +++++++++++++++++++++++++++++++++++++++++++++++++
  ];
  return (
    <div className="container mx-auto p-1">
      <BentoBox items={projek} />
    </div>
  );
};

export default Projek;
