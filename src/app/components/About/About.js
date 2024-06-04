import React from "react";
import BentoBox from "../Bento/Box";
import Image from "next/image";
import Boxcustom from "../Bento/Boxcustom";

//  for sizing project:
//  1-3-6
//  for sizing other adjust manually:
//  1-4-8

const Home = () => {
  const intro = [
    {
      title: "Passionate to pursue the technology.",
      subtitle:
        "I enjoy learning new things and try to overcome new challenges while analyzing how I improved through them.",
      introduce: "Hi, I'm Reza.",
      size: " sm:col-span-1 md:col-span-4 lg:col-span-8",
    },
    {
      image: "/images/poto.jpeg",
      title: "",
      description: "",
      size: " sm:col-span-1 md:col-span-2 lg:col-span-4",
    },
  ];

  const items = [
    {
      image: "/path/to/image3.jpg",
      title: "Item 3",
      description: "This is the third item.",
      size: " sm:col-span-1 md:col-span-6 lg:col-span-12",
    },
    {
      image: "/path/to/image4.jpg",
      title: "Item 4",
      description: "This is the fourth item.",
      size: " sm:col-span-1 md:col-span-3 lg:col-span-6",
    },
    {
      image: "/path/to/image4.jpg",
      title: "Item 4",
      description: "This is the fourth item.",
      size: " sm:col-span-1 md:col-span-3 lg:col-span-6",
    },
    {
      image: "/path/to/image4.jpg",
      title: "Item 4",
      description: "This is the fourth item.",
      size: " sm:col-span-1 md:col-span-3 lg:col-span-6",
    },
    {
      image: "/path/to/image4.jpg",
      title: "Item 4",
      description: "This is the fourth item.",
      size: " sm:col-span-1 md:col-span-3 lg:col-span-6",
    },

    // +++++++++++++++++++++++++++++++++++++++++++++++++
  ];

  return (
    <div className="container mx-auto p-1">
      <Boxcustom items={intro} />
      <BentoBox items={items} />
    </div>
  );
};

export default Home;
